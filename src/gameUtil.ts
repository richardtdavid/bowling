import { BbyBowling } from './game'
import { Player } from './player'

export class GameUtil {
    private readonly _games: Player[]

    constructor() {
        this._games = []
    }

    init(numOfPlayer: number, gameId: number) {
        this._games.push(new Player());

        for (let i = 0; i < numOfPlayer; i++) {
            this._games[gameId].addPlayerGame(new BbyBowling());
        }
    }

    roll(gameId: number, playerId: number, knocks: number) {
        const game = this._games[gameId]
        if (!game) {
            throw new Error('there is no game')
        }

        const player = this._games[gameId].players[playerId]
        if (!player) {
            throw new Error('there is no player')
        }

        try {
            player.roll(knocks)
        } catch {
            throw new Error('invalid number of knocked pins')
        }
    }

    getScore(gameId: number, playerId: number) {
        const game = this._games[gameId]
        if (!game) {
            throw new Error('there is no game')
        }

        const player = this._games[gameId].players[playerId]
        if (!player) {
            throw new Error('there is no player')
        }

        return player.score
    }

    getFrame(gameId: number, playerId: number) {
        const game = this._games[gameId]
        if (!game) {
            throw new Error('there is no game')
        }

        const player = this._games[gameId].players[playerId]
        if (!player) {
            throw new Error('there is no player')
        }

        const frame = player.frames
        if (!frame) {
            throw new Error('there is no frame')
        }
        return frame
    }

    get games() {
        return this._games
    }

}
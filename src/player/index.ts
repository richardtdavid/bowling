import { BbyBowling } from '../game'
export class Player {
    private _players: Array<BbyBowling>

    constructor() {
        this._players = []
    }

    addPlayerGame(game: BbyBowling) {
        if (this._players.length < 2) {
            this._players.push(game);
        } else {
            throw new RangeError('max player count exceeded');
        }
    }

    get players() {
        return this._players;
    }

}


import * as readline from 'readline'
import { GameUtil } from './gameUtil'

class Bowling {
    private currentplayers: string[]

    constructor(private readonly gameService: GameUtil) {
        this.currentplayers = []
    }

    async start() {
        try {
            const prompt = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            const question = (str: string): Promise<string> => new Promise(resolve => prompt.question(str, resolve));

            // get player names 
            const playerOne = await question("Enter first player name!  ")
            this.currentplayers.push(<string>playerOne)
            const playertwo = await question("Enter second player name! ")
            this.currentplayers.push(<string>playertwo)

            const numOfPlayer = this.currentplayers.length
            const gameId = 0

            // init game with N players
            this.gameService.init(numOfPlayer, gameId)


            // ask players to roll 
            this.currentplayers.forEach(async (player, index) => {
                const knocks = await question(`how many new pins got knocked off for ${player} `)
                this.gameService.roll(gameId, index, parseInt(<string>knocks))
            })

            // // get players score 
            // this.currentplayers.forEach(async (player, index) => {
            //     console.log(`${player} Score: ${this.gameService.getScore(gameId, index)}`)
            // })

            // prompt.close()
        } catch (err) {
            console.error(err)
            throw new Error('unexpected crash')
        }
    }
}






// console.log('Score : 🎳', game.score)
// console.log(player.getPlayers)

new Bowling(new GameUtil()).start()
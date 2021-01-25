import { IBowlingGame } from './interface'

export class BbyBowling implements IBowlingGame {
    private rolls: Array<number>
    constructor() {
        this.rolls = []
    }

    roll(pins: number) {
        if (pins < 0 || 10 < pins) {
            throw new RangeError('invalid pins entered');
        }

        this.rolls.push(pins)
    }

    isStrike(rollCount: number) {
        return this.rolls[rollCount] === 10
    }

    isSpare(frameScore: number) {
        return frameScore === 10
    }

    getSpareCount(rollCount: number) {
        return 10 + this.rolls[rollCount + 2]
    }

    getStrikeCount(rollCount: number) {
        return 10 + this.rolls[rollCount + 1] + this.rolls[rollCount + 2]
    }

    getFrameScore(rollCount: number) {
        return this.rolls[rollCount] + this.rolls[rollCount + 1]
    }

    get score() {
        let score = 0
        let rollCount = 0

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollCount)) {
                score += this.getStrikeCount(rollCount)
                rollCount++
                continue
            }

            const frameScore = this.getFrameScore(rollCount)

            if (this.isSpare(frameScore)) {
                score += this.getSpareCount(rollCount)
            } else {
                score += frameScore
            }

            rollCount += 2
        }

        return score
    }

    get getRolls() {
        return this.rolls
    }

    get frames() {
        let frames = [];
        let frameHolder: (string | number | null)[] = []

        this.rolls.forEach((item) => {
            if (item == 10) {
                frameHolder.push(null);
                frameHolder.push('X');
            } else if (frameHolder.length == 1 && item + <number>frameHolder[0] == 10) {
                frameHolder.push('/');
            } else {
                if (item == 0) {
                    frameHolder.push('-');
                } else {
                    frameHolder.push(item);
                }
            }

            if (frameHolder.length == 2) {
                frames.push(frameHolder);
                frameHolder = [];
            }
        })

        if (frameHolder.length == 1) {
            frameHolder.push(null);
            frames.push(frameHolder);
        }

        return frames;
    }

}
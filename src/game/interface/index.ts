export interface IBowlingGame {
    roll: (pins: number) => void
    readonly score: Number
    readonly isSpare: (frameScore: number) => Boolean
    readonly getSpareCount: (rollCount: number) => number
    readonly isStrike: (rollCount: number) => Boolean
    readonly getStrikeCount: (rollCount: number) => number
    readonly getFrameScore: (rollCount: number) => number
    readonly frames: (string | number | null)[][]
    readonly getRolls: number[]
}
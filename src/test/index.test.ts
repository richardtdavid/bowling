import { BbyBowling } from '../game'

let bbyGame: BbyBowling

beforeEach(() => {
    bbyGame = new BbyBowling()
})

test("should return 0 for rolls of 0's, ie. gutter game", () => {
    multipleRolls(0, 20)
    expect(bbyGame.score).toEqual(0)
})

test("should return all the frames for a gutter game", () => {
    multipleRolls(0, 20)
    expect(bbyGame.frames).toEqual([["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]])

})

test("should return 20 for rolls of ones", () => {
    multipleRolls(1, 20)
    expect(bbyGame.score).toEqual(20)
})

test("should return score for when rolled is spare ", () => {
    bbyGame.roll(5)
    bbyGame.roll(5)
    bbyGame.roll(3)
    multipleRolls(0, 17)
    expect(bbyGame.score).toEqual(16)
    expect(bbyGame.frames).toEqual([[5, "/"], [3, "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]])
})

test("should return a score when rolled is strike", () => {
    bbyGame.roll(10)
    bbyGame.roll(1)
    bbyGame.roll(1)
    multipleRolls(0, 17)
    expect(bbyGame.score).toEqual(14)
})

test("should return a score strike roll", () => {
    bbyGame.roll(10)
    bbyGame.roll(4)
    bbyGame.roll(3)
    multipleRolls(0, 16)
    expect(bbyGame.score).toEqual(24)
    expect(bbyGame.frames).toEqual([[null, "X"], [4, 3], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]])
})

it("should return a score for a perfect game", () => {
    multipleRolls(10, 12)
    expect(bbyGame.score).toEqual(300)
})

it("should return all the frames for a perfect game", () => {
    multipleRolls(10, 12)
    expect(bbyGame.score).toEqual(300)
    expect(bbyGame.frames).toEqual([[null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"], [null, "X"]])
})

it("should return 10's for 12 rolls", () => {
    multipleRolls(10, 12)
    expect(bbyGame.getRolls).toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
})


const multipleRolls = (pins: number, rolls: number) => {
    for (let i = 0; i < rolls; i++) {
        bbyGame.roll(pins)
    }
}
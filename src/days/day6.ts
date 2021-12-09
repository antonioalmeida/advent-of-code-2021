import { range, readInput } from '../utils'

const lanterfish = readInput('day6.in', ',').map((s) => parseInt(s))

export const part1 = () => {
    range(0, 80).forEach(_ => {
        lanterfish.forEach((val, i) => {
            if (val == 0) { 
                lanterfish.push(8)
                lanterfish[i] = 6
            }
            else lanterfish[i] = val - 1
        })
    })

    return lanterfish.length
}

export const part2 = () => {
    const fishAtTimer:number[] = new Array(9).fill(0)

    lanterfish.forEach((f) => fishAtTimer[f]++)

    range(0, 256).forEach(_ => {
        const nFishAtZero = fishAtTimer[0]

        fishAtTimer[0] = fishAtTimer[1]
        fishAtTimer[1] = fishAtTimer[2]
        fishAtTimer[2] = fishAtTimer[3]
        fishAtTimer[3] = fishAtTimer[4]
        fishAtTimer[4] = fishAtTimer[5]
        fishAtTimer[5] = fishAtTimer[6]
        fishAtTimer[6] = nFishAtZero + fishAtTimer[7]
        fishAtTimer[7] = fishAtTimer[8]
        fishAtTimer[8] = nFishAtZero
    })

    return fishAtTimer.reduce((a,b) => a+b)
}
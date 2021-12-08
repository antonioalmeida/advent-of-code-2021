import { range, readInput } from '../utils'

const lanterfish = readInput('day6-demo.in', ',').map((s) => parseInt(s))

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

}
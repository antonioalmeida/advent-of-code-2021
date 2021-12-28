import { readInput } from "../utils"

const entries = readInput("day8.in").map((s) => {
    const [signals, outputs] = s.split('|').map((a) => a.split(' ').filter((a) => a))
    return { signals, outputs }
})

export const part1 = () => {

    const isDigit = (s: string) =>
        s.length == 2 || // 1
        s.length == 4 || // 4
        s.length == 3 || // 7
        s.length == 7    // 8
    
    // @ts-ignore
    return entries.map(({outputs}) => outputs.map((o) => isDigit(o)).reduce((a,b) => a+b)).reduce((a,b) => a+b)
}

export const part2 = () => {

}


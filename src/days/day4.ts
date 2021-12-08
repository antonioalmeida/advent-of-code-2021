import { readInput, transpose } from '../utils'

const input = readInput('day4.in', '\n\n')

const draws = input[0].split(',').map(s => parseInt(s))
const boards = input.slice(1).map(b => b.split('\n').map(r => r.trim().split(/\s+/).map(c => parseInt(c))))
 
export const part1 = () => {

    for (const d of draws) {
        for (let i = 0; i < boards.length; i++) {
            const b = boards[i].map((row) => row.map(value => value == d ? -1 : value))
            const sum = b.map(r => r.filter(c => c > -1).reduce((a,b) => a+b, 0)).reduce((a,b) => a+b)
            const hBingo = b.map(r => r.reduce((a,b) => a+b, 0)).some((u) => u == -5)
            const vBingo = transpose(b).map(r => r.reduce((a,b) => a+b, 0)).some((u) => u == -5)

            if (vBingo || hBingo) return sum * d
            boards[i] = b
        }
    }
}

export const part2 = () => {
    let lastScore: number

    for (const d of draws) {
        for (let i = 0; i < boards.length; i++) {
            const b = boards[i].map((row) => row.map(value => value == d ? -1 : value))
            const sum = b.map(r => r.filter(c => c > -1).reduce((a,b) => a+b, 0)).reduce((a,b) => a+b)
            const hBingo = b.map(r => r.reduce((a,b) => a+b, 0)).some((u) => u == -5)
            const vBingo = transpose(b).map(r => r.reduce((a,b) => a+b, 0)).some((u) => u == -5)

            if (vBingo || hBingo) {
                lastScore = sum * d
                boards.splice(i, 1)
                i--
            } else
                boards[i] = b
        }
    }
    return lastScore
}
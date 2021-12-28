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

    const setDigit = (digits: Map<number, string>, n: number, code: string) => {
        const c = code.split(''); c.sort()
        digits.set(n, c.join(''))
    }

    return entries.map(({ signals, outputs }) => {
        signals.sort((a,b) => a.length-b.length)

        const digits: Map<number, string> = new Map()
        const containsDigit = (string: string, digit: number): boolean => {
            const chars = string.split('')
            return digits.get(digit).split('').every((c) => chars.includes(c))
        }
        const numberOfDigitsInCommon = (string: string, digit: number): number => {
            const chars = string.split('')
            // @ts-ignore
            return digits.get(digit).split('').map((c) => chars.includes(c)).reduce((a,b) => a+b)
        }

        signals.forEach(s => {
            if (s.length == 2) setDigit(digits, 1, s) 
            else if (s.length == 4) setDigit(digits, 4, s)
            else if (s.length == 3) setDigit(digits, 7, s)
            else if (s.length == 5) {
                if(containsDigit(s, 7)) setDigit(digits, 3, s)
                else if (numberOfDigitsInCommon(s, 4) == 3) setDigit(digits, 5, s)
                else if (numberOfDigitsInCommon(s, 4) == 2) setDigit(digits, 2, s)
            }
            else if (s.length == 6) {
                if(containsDigit(s, 4)) setDigit(digits, 9, s)
                else if(containsDigit(s, 7)) setDigit(digits, 0, s)
                else setDigit(digits, 6, s)
            }
            else if (s.length == 7) setDigit(digits, 8, s)
        })

        const digitsToCode: Map<string, number> = new Map();
        digits.forEach((value, key) => digitsToCode.set(value, key));

        const sorted = outputs.map((o) => o.split('').sort().join(''))
        return sorted.map(o => digitsToCode.get(o).toString()).join('')
    })
    .map(a => parseInt(a))
    .reduce((a,b) => a+b)
}


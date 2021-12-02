import { readInput } from '../utils'

const commands: { direction: string, amount: number }[] = readInput('day2.in').map((entry) => {
    const [direction, amount] = entry.split(' ')
    return { direction, amount: Number(amount) } 
})
 

export const part1 = () => {
    const ops = {
        'up':      (n) => (x,y) => [x,y-n],
        'forward': (n) => (x,y) => [x+n,y],
        'down':    (n) => (x,y) => [x,y+n],
    }

    let x = 0; let y = 0

    for (const {direction, amount} of commands) {
        const op = ops[direction](amount);
        [x,y] = op(x,y)
    }

    return x*y
}

export const part2 = () => {
    const ops = {
        'up':      (n) => (x,y,a) => [x,y,a-n],
        'forward': (n) => (x,y,a) => [x+n,y+(a*n),a],
        'down':    (n) => (x,y,a) => [x,y,a+n],
    }

    let x = 0; let y = 0; let a = 0;

    for (const {direction, amount} of commands) {
        const op = ops[direction](amount);
        [x,y,a] = op(x,y,a)
    }

    return x*y
}
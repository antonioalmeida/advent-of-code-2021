import fs from 'fs'

const BASE_DIR = 'inputs'

export const readInput = (filename: string, separator: string = '\n') => {
    return fs.readFileSync(`${BASE_DIR}/${filename}`).toString().split(separator)
}

export const transpose = m => m[0].map((x,i) => m.map(x => x[i]))

export const range = (start: number, stop: number, step: number = 1) => Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
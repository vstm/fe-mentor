import { expect, test, describe } from 'vitest'
import { createDate, dateDiff, daysInMonth } from './date-utils'

describe('daysInMonth', () => {
    test.each([
        [[2024, 1, 15], 31],
        [[2024, 3, 15], 31],
        [[2024, 4, 15], 30],
        [[2024, 5, 15], 31],
        [[2024, 6, 15], 30],
        [[2024, 7, 15], 31],
        [[2024, 8, 15], 31],
        [[2024, 9, 15], 30],
        [[2024, 10, 15], 31],
        [[2024, 11, 15], 30],
        [[2024, 12, 15], 31],

        [[2024, 2, 15], 29],
        [[2023, 2, 15], 28],
    ])('daysInMonth(%j) -> %i', (date, expectedDays) => {
        expect(daysInMonth(createDate(...date))).toBe(expectedDays)        
    })    
})


describe('dateDiff', () => {
    test.each([
        [[2024, 8, 8], [2024, 8, 8], { years: 0, months: 0, days: 0 }],
        [[2024, 7, 8], [2024, 8, 8], { years: 0, months: 1, days: 0 }],
        [[2023, 8, 8], [2024, 8, 8], { years: 1, months: 0, days: 0 }],
        [[2023, 7, 8], [2024, 8, 8], { years: 1, months: 1, days: 0 }],
        [[2023, 9, 8], [2024, 8, 8], { years: 0, months: 11, days: 0 }],
        [[2023, 12, 8], [2024, 8, 8], { years: 0, months: 8, days: 0 }],
        [[2023, 8, 8], [2024, 8, 9], { years: 1, months: 0, days: 1 }],
        [[2023, 8, 9], [2024, 8, 8], { years: 0, months: 11, days: 30 }],
        [[2023, 8, 10], [2024, 8, 8], { years: 0, months: 11, days: 29 }],
    ])('%j - %j => %o', (date1, date2, diff) => {
        expect(dateDiff(createDate(...date1), createDate(...date2))).toStrictEqual(diff)
    })
})

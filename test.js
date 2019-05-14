const assert = require('assert')
const whatday = require('./')

const testSuite = [
    ['1987-01-08', 'Thursday'],
    ['1987-08-08', 'Saturday'],
    ['1987-12-08', 'Tuesday'],
    ['2000-01-08', 'Saturday'],
    ['2001-08-08', 'Wednesday'],
    ['2002-08-08', 'Thursday'],
    ['2010-08-08', 'Sunday'],
    ['2019-08-08', 'Thursday'],
    [ new Date('2019-05-15'), 'Wednesday'],
    [ new Date('2019-05-16'), 'Thursday'],
    [ new Date('2019-05-17'), 'Friday'],
    [ new Date('2019-05-18'), 'Saturday']
]

for (const [input, expected] of testSuite) {
    const output = whatday(input)
    assert.equal(output, expected, `expecting day of week of ${input} to be ${expected}, got ${output}`)
}

assert.throws(() => whatday(''), Error)
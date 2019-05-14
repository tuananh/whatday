// http://mathforum.org/dr.math/faq/faq.calendar.html

const { abs, floor } = Math
/**
 * find out which day of week from date
 * @param {string|Date} input date string or date object
 */
function whatday(input) {
    let date = input
    if (typeof date === 'string') {
        date = new Date(date)
        if (date.getTime() !== date.getTime()) { // invalid date
            throw new Error('expecting input to be a date string or Date object')
        }
    }

    const k = date.getDate()
    // March is 1, April is 2, and so on to February, which is 12
    // January and February is counted as 11 and 12 of previous year
    const m = (date.getMonth() + 11) % 12
    const y = m >= 11 ? date.getFullYear() -1 : date.getFullYear()
    const d = y % 100
    const c = floor(y / 100)
    const f = k + floor((13*m-1)/5) + d + floor(d/4) + floor(c/4) - 2*c
    const r = ((f % 7)+7) % 7

    // 0 is Sunday and so on...
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return daysOfWeek[r]
}

module.exports = whatday
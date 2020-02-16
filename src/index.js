var calcPercent = require('calc-percent');


function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function diff(a, b) {
    return a > b ? (a - b) : (b - a);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a, b, suffix, decimal) {
    return calcPercent(a, b, {suffix: suffix, decimal: decimal});
}

module.exports = {
    plus: plus,
    minus: minus,
    diff: diff,
    multiply: multiply,
    divide: divide
};

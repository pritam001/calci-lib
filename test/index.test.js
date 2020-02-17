const { plus, minus, multiply, diff, divide, percent } = require('../dist/index.js');

test('adds 1 + 2 to equal 3', () => {
    expect(plus(1, 2)).toBe(3);
});

test('adds 10 - 2 to equal 8', () => {
    expect(minus(10, 2)).toBe(8);
});

test('diff 10, 2 to equal 8', () => {
    expect(diff(10, 2)).toBe(8);
    expect(diff(10, 18)).toBe(8);
});

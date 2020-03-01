const { plus, minus, multiply, diff, divide, mod, percent } = require('../dist/index.js');

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

test('multiply 2 and 5 to equal 10', () => {
    expect(multiply(2, 5)).toBe(10);
});

test('divide 20 and 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
});

test('mod 22 and 5 to equal 2', () => {
    expect(mod(22, 5)).toBe(2);
});

test('percent library test', () => {
    expect(percent(7, 18, "%", 2)).toBe("38.89%");
    expect(percent(19, 12, null, 5)).toBe("158.33333");
    expect(percent(7, 10, null, 2)).toBe("70.00");
    expect(percent(17, 12, null, null)).toBe("142");
});


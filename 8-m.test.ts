import Expect = require('expect');

// Start ai 2020-12-7 22:27:51
// End at 2020-12-7 22:41:28
function myAtoi(s: string): number {
    return Math.max(
        Math.min(parseInt(s.trim()) || 0, 2 ** 31 - 1),
        - (2 ** 31),
    );
};

// console.log(convert('PAYPALISHIRING', 4));
test('isPalindromic', () => {
    Expect(myAtoi('-91283472332')).toBe(-2147483648);
    Expect(myAtoi('words and 987')).toBe(0);
    Expect(myAtoi('4193 with words')).toBe(4193);
    Expect(myAtoi('   -42')).toBe(-42);
});
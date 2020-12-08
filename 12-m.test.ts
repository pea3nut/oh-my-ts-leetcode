import Expect = require('expect');

// Start at 2020-12-8 20:35:39
// Understand at 2020-12-8 20:39:07
// End at 2020-12-8 20:52:48

const codeList :Array<[string, number]> = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

function intToRoman(restNum: number): string {
    let result :string [] = [];

    for (const [code, codeNum] of codeList) {
        while(restNum >= codeNum) {
            restNum -= codeNum;
            result.push(code);
        }
    }

    return result.join('');
}
test('isPalindromic', () => {
    Expect(intToRoman(1)).toBe('I');
    Expect(intToRoman(3)).toBe('III');
    Expect(intToRoman(4)).toBe('IV');
    Expect(intToRoman(9)).toBe('IX');
    Expect(intToRoman(58)).toBe('LVIII');
    Expect(intToRoman(1994)).toBe('MCMXCIV');
    Expect(intToRoman(3994)).toBe('MMMCMXCIV');
});
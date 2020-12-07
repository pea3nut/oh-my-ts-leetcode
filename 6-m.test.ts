import Expect = require('expect');

// Start ai 2020.12.7 21:39:30
// End at 2020.12.7 21:58:44
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const results :string[][] = new Array(numRows).fill(null).map(()=>[]);

    const maxCount = numRows * 2 - 2;
    for (let i = 0; i < s.length; i++) {
        const smallIndex = i % maxCount;
        const floor = smallIndex >= numRows ? (numRows - 2 - (smallIndex % numRows)) : smallIndex ;

        results[floor].push(s[i]);
    }

    return results.map(i => i.join('')).join('');
}

// console.log(convert('PAYPALISHIRING', 4));
test('isPalindromic', () => {
    Expect(convert('PAYPALISHIRING', 1)).toBe('PAYPALISHIRING');
    Expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    Expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});
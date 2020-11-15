import Expect = require('expect');


function isPalindromic (str :string) :boolean {
    const halfLength = ~~(str.length / 2);

    for (let i = 0; i < halfLength; i++) {
        const code1 = str[i];
        const code2 = str[str.length - i - 1];

        if (code1 !== code2) return false;
    }

    return true;
}

function longestPalindrome(str: string): string {
    if (str.length <=1) return str;

    let maxLength = 1;
    let maxStr = str[0];

    for (let i1 = 0; i1 < str.length; i1++) {
        for (let i2 = i1 + maxLength; i2 < str.length + 1; i2++) {
            const subStr = str.slice(i1, i2);

            if (isPalindromic(subStr) && subStr.length > maxLength) {
                maxStr = subStr;
                maxLength = maxStr.length;
            }

        }
    }

    return maxStr;
};


test('isPalindromic', () => {
    Expect(isPalindromic('')).toBe(true);
    Expect(isPalindromic('a')).toBe(true);
    Expect(isPalindromic('aba')).toBe(true);
    Expect(isPalindromic('abba')).toBe(true);
    Expect(isPalindromic('abcba')).toBe(true);
    Expect(isPalindromic('abccba')).toBe(true);
    Expect(isPalindromic('aaaa')).toBe(true);

    Expect(isPalindromic('abca')).toBe(false);
    Expect(isPalindromic('aabc')).toBe(false);
    Expect(isPalindromic('ab')).toBe(false);
    Expect(isPalindromic('abda')).toBe(false);
    Expect(isPalindromic('dbaa')).toBe(false);
    Expect(isPalindromic('aaab')).toBe(false);
    Expect(isPalindromic('baaa')).toBe(false);
    Expect(isPalindromic('baaa')).toBe(false);
});
test('longestPalindrome', () => {
    Expect(longestPalindrome('babad')).toBe('bab');
    Expect(longestPalindrome('cbbd')).toBe('bb');
    Expect(longestPalindrome('qawrhgwrsabbaqawergqaw')).toBe('abba');
    Expect(longestPalindrome('qawrhgwrsabcbaqawergqaw')).toBe('abcba');
    Expect(longestPalindrome('abbaqawrhgwrsaawergqaw')).toBe('abba');
    Expect(longestPalindrome('abcbaqawrhgwrsaawergqaw')).toBe('abcba');
    Expect(longestPalindrome('abccbaqawrhgwrsaawergqaw')).toBe('abccba');
    Expect(longestPalindrome('qawrhgwrsaawergqawabba')).toBe('abba');
    Expect(longestPalindrome('qawrhgwrsaawergqawabcba')).toBe('abcba');
    Expect(longestPalindrome('a')).toBe('a');
    Expect(longestPalindrome('ac')).toBe('c');
});

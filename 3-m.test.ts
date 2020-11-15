import Expect = require('expect');


function hasRepeatCode(str :string) :boolean {
    for (let i1 = 0; i1 < str.length; i1++) {
        const code1 = str[i1];
        for (let i2 = i1 + 1; i2 < str.length; i2++) {
            const code2 = str[i2];

            if (code1 === code2) return true;
        }
    }

    return false;
}

function lengthOfLongestSubstring(str: string): number {
    if (str.length <=1) return str.length;

    let maxLength = 1;

    for (let i1 = 0; i1 < str.length; i1++) {
        for (let i2 = i1 + maxLength; i2 < str.length + 1; i2++) {
            const subStr = str.slice(i1, i2);

            if (hasRepeatCode(subStr)) break;

            maxLength = Math.max(maxLength, subStr.length);
        }
    }

    return maxLength;
};


test('hasRepeatCode', () => {
    Expect(hasRepeatCode('ab')).toBe(false);
    Expect(hasRepeatCode('abc')).toBe(false);
    Expect(hasRepeatCode('abca')).toBe(true);
    Expect(hasRepeatCode('aabc')).toBe(true);
    Expect(hasRepeatCode('abbc')).toBe(true);
    Expect(hasRepeatCode('abcc')).toBe(true);
    Expect(hasRepeatCode('abca')).toBe(true);
});
test('lengthOfLongestSubstring', () => {
    Expect(lengthOfLongestSubstring("ab")).toBe(2);
    Expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    Expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    Expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    Expect(lengthOfLongestSubstring("abc222abc")).toBe(4);
    Expect(lengthOfLongestSubstring("abc222abcd")).toBe(5);
    Expect(lengthOfLongestSubstring("abcd222abc")).toBe(5);
    Expect(lengthOfLongestSubstring("222abcd222")).toBe(5);
});

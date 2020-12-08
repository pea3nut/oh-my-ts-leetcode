import Expect = require('expect');

// Start at 2020-12-8 08:55:55
// Understand at 2020-12-8 09:00:02
// End at 2020-12-8 09:07:08
function maxArea(height: number[]): number {
    if (height.length === 2) return countArea(height[0], height[1], 1);

    let maxArea = 0;
    for (let index1 = 0; index1 < height.length; index1++) {
        for (let index2 = index1 + 1; index2 < height.length; index2++) {
            maxArea = Math.max(maxArea, countArea(
                height[index1],
                height[index2],
                index2 - index1
            ));
        }
    }

    return maxArea;
}
function countArea(a1 :number, a2 :number, distance :number) {
    const min = Math.min(a1, a2);

    return min * distance;
}

// console.log(convert('PAYPALISHIRING', 4));
test('isPalindromic', () => {
    Expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
    Expect(maxArea([4,3,2,1,4])).toBe(16);
    Expect(maxArea([1,2,1])).toBe(2);
});
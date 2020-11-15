function findMedianSortedArrays(arr1: number[], arr2: number[]): number {
    if (arr1.length === 0 && arr2.length === 0) return 0;

    const targetIndexes = [];
    const targetValues = [];

    let index1 = 0;
    let index2 = 0;
    let sumIndex = 0;
    const readNext = () => {
        const value1 = arr1[index1];
        const value2 = arr2[index2];
        let realValue :number;

        if (typeof value1 !== 'number') {
            index2++;
            realValue = value2;
        } else if (typeof value2 !== 'number') {
            index1++;
            realValue = value1;
        } else if (value1 < value2) {
            index1++;
            realValue = value1;
        } else {
            index2++;
            realValue = value2;
        }
        sumIndex++;

        return {
            value: realValue,
            index: sumIndex - 1,
        }
    };

    if ((arr1.length + arr2.length) / 2 % 1 === 0) {
        targetIndexes.push((arr1.length + arr2.length) / 2 - 1);
        targetIndexes.push((arr1.length + arr2.length) / 2);
    } else {
        targetIndexes.push(Math.floor((arr1.length + arr2.length) / 2));
    }

    do {
        const { value, index } = readNext();
        if (targetIndexes.includes(index)) {
            targetValues.push(value);

            if (targetIndexes.length === targetValues.length) {
                break;
            }
        }
    } while (true);

    return targetValues.reduce(
        (sum, value) => sum + value,
        0,
    ) / targetValues.length;
}

import Expect = require('expect');

test('findMedianSortedArrays1', () => {
    Expect(findMedianSortedArrays([], [])).toBe(0);
    Expect(findMedianSortedArrays([1], [])).toBe(1);
    Expect(findMedianSortedArrays([1], [1])).toBe(1);
    Expect(findMedianSortedArrays([], [1])).toBe(1);
    Expect(findMedianSortedArrays([1,1], [1])).toBe(1);
    Expect(findMedianSortedArrays([1,1], [1,1])).toBe(1);
    Expect(findMedianSortedArrays([1], [1,1])).toBe(1);
});
test('findMedianSortedArrays2', () => {
    Expect(findMedianSortedArrays([1,3], [2])).toBe(2);
    Expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
    Expect(findMedianSortedArrays([1,3], [2,4])).toBe(2.5);
    Expect(findMedianSortedArrays([1,4], [2,3])).toBe(2.5);
    Expect(findMedianSortedArrays([1,2], [3,4,5])).toBe(3);
    Expect(findMedianSortedArrays([1,2,5], [3,4])).toBe(3);
    Expect(findMedianSortedArrays([1,2,3], [4,5])).toBe(3);
    Expect(findMedianSortedArrays([0], [0])).toBe(0);
});
test('findMedianSortedArrays3', () => {
    Expect(findMedianSortedArrays([1,2,3,4], [2])).toBe(2);
    Expect(findMedianSortedArrays([1,2,3,4], [2,2])).toBe(2);
    Expect(findMedianSortedArrays([1,2,3,4,5], [])).toBe(3);
});
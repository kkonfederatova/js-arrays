import getIntersectionOfSortedArrays from '../arrays.js';

describe('getIntersectionOfSortedArrays', () => {
  it('test 1', () => {
    const actual = getIntersectionOfSortedArrays([], []);
    expect(actual).toEqual([]);
  });

  it('test 2', () => {
    const actual = getIntersectionOfSortedArrays([1], []);
    expect(actual).toEqual([]);
  });

  it('test 3', () => {
    const actual = getIntersectionOfSortedArrays([], [2]);
    expect(actual).toEqual([]);
  });

  it('test 4', () => {
    const actual = getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]);
    expect(actual).toEqual([]);
  });

  it('test 5', () => {
    const actual = getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]);
    expect(actual).toEqual([10, 24]);
  });

  it('test 6', () => {
    const actual = getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21]);
    expect(actual).toEqual([10]);
  });

  it('test 7', () => {
    const actual = getIntersectionOfSortedArrays([10, 12, 19, 21], [3, 5, 10]);
    expect(actual).toEqual([10]);
  });

  it('test 8', () => {
    const actual = getIntersectionOfSortedArrays([10, 13, 14, 18, 24, 30], [10, 11, 24]);
    expect(actual).toEqual([10, 24]);
  });

  it('test 9', () => {
    const actual = getIntersectionOfSortedArrays([10, 11, 24, 30], [10, 13, 14, 18, 24, 30]);
    expect(actual).toEqual([10, 24, 30]);
  });

  it('test 10', () => {
    const actual = getIntersectionOfSortedArrays(
      [10, 11, 14, 18, 24, 30],
      [10, 13, 14, 18, 24, 30],
    );
    expect(actual).toEqual([10, 14, 18, 24, 30]);
  });

  it('test 11', () => {
    const actual = getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]);
    expect(actual).toEqual([1, 2]);
  });
});

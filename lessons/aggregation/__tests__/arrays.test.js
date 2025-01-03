import calculateSum from '../arrays.js';

describe('calculateSum', () => {
  it('#calculate', () => {
    const coll1 = [8, 9, 21, 19, 18, 22, 7];
    expect(calculateSum(coll1)).toBe(48);

    const coll2 = [2, 0, 17, 3, 9, 15, 4];
    expect(calculateSum(coll2)).toBe(27);
  });

  it('#should be zero', () => {
    const coll1 = [2, 17, 4, 10, 16, 14, 1];
    expect(calculateSum(coll1)).toBe(0);

    const coll2 = [];
    expect(calculateSum(coll2)).toBe(0);
  });

  it('#all items must be checked', () => {
    const coll1 = [2, 17, 4, 10, 16, 14, 1, 3];
    expect(calculateSum(coll1)).toBe(3);
  });
});

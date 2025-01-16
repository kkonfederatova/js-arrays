import getLastWordLength from '../solution.js';

test('length of last word', () => {
  expect(getLastWordLength('')).toBe(0);
  expect(getLastWordLength('hi')).toBe(2);
  expect(getLastWordLength('hello, man  ')).toBe(3);
  expect(getLastWordLength('man in black')).toBe(5);
  expect(getLastWordLength('hello, world!')).toBe(6);
  expect(getLastWordLength('hello, wOrLD!  ')).toBe(6);
});
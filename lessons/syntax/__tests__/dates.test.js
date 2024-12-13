import { getWeekends } from '../dates.js';

test('get', () => {
  expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
  expect(getWeekends('short')).toEqual(['sat', 'sun']);
  expect(getWeekends()).toEqual(['saturday', 'sunday']);
});

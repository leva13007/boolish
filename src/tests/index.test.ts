import { Not } from '../functions/Not';

test('Not function', () => {
  expect(Not(true)).toBe(false);
  expect(Not(false)).toBe(true);
  expect(Not('hello')).toBe(false);
  expect(Not('')).toBe(true);
  expect(Not(1)).toBe(false);
  expect(Not({})).toBe(false);
  expect(Not([])).toBe(false);
});

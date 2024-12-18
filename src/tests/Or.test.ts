import { Or } from '../functions/Or';

describe('Tests for `Or` function', () => {

  describe('Should return `true` when at least one value is truthy', () => {
    test('Truthy primitives and objects', () => {
      expect(Or(true, false)).toBe(true);
      expect(Or(1, 0)).toBe(true);
      expect(Or('hello', '')).toBe(true);
      expect(Or({}, null)).toBe(true);
      expect(Or(Infinity, NaN)).toBe(true);
      expect(Or(Symbol('symbol'), undefined)).toBe(true);
    });
  });

  describe('Should return `false` when both values are falsy', () => {
    test('Falsy values', () => {
      expect(Or(false, 0)).toBe(false);
      expect(Or('', null)).toBe(false);
      expect(Or(undefined, NaN)).toBe(false);
      expect(Or(null, null)).toBe(false);
    });
  });

  describe('Additional cases', () => {
    test('Boolean coercion with BigInt values', () => {
      expect(Or(BigInt(1), BigInt(0))).toBe(true);
      expect(Or(BigInt(0), BigInt(0))).toBe(false);
    });

    test('Empty structures', () => {
      expect(Or([], {})).toBe(true);       // Both are truthy
      expect(Or([], null)).toBe(true);     // Array is truthy, null is falsy
      expect(Or({}, undefined)).toBe(true); // Object is truthy, undefined is falsy
    });

    test('Special cases with Infinity', () => {
      expect(Or(Infinity, -Infinity)).toBe(true);
      expect(Or(-Infinity, 0)).toBe(true);
      expect(Or(0, -Infinity)).toBe(true);
      expect(Or(NaN, 0)).toBe(false);      // Both values are falsy
    });
  });

});

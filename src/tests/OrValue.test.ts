import { OrValue } from '../functions/OrValue';

describe('Tests for `OrValue` function', () => {

  describe('Should return the first truthy value when at least one value is truthy', () => {
    test('Truthy primitives and objects', () => {
      expect(OrValue(true, false)).toBe(true);
      expect(OrValue(1, 0)).toBe(1);
      expect(OrValue('hello', '')).toBe('hello');
      expect(OrValue({}, null)).toEqual({});
      expect(OrValue(Infinity, NaN)).toBe(Infinity);
      expect(typeof OrValue(Symbol('symbol'), undefined)).toBe('symbol');
    });
  });

  describe('Should return the second value when both values are falsy', () => {
    test('Falsy values', () => {
      expect(OrValue(false, 0)).toBe(0);
      expect(OrValue('', null)).toBe(null);
      expect(OrValue(undefined, NaN)).toBe(NaN);
      expect(OrValue(null, null)).toBe(null);
    });
  });

  describe('Additional cases', () => {
    test('Boolean coercion with BigInt values', () => {
      expect(OrValue(BigInt(1), BigInt(0))).toBe(BigInt(1));
      expect(OrValue(BigInt(0), BigInt(1))).toBe(BigInt(1));
      expect(OrValue(BigInt(0), BigInt(0))).toBe(BigInt(0));
    });

    test('Empty structures', () => {
      expect(OrValue([], {})).toEqual([]);       // Array is truthy
      expect(OrValue(null, [])).toEqual([]);     // Array is truthy
      expect(OrValue({}, undefined)).toEqual({}); // Object is truthy
    });

    test('Special cases with Infinity', () => {
      expect(OrValue(Infinity, -Infinity)).toBe(Infinity);
      expect(OrValue(-Infinity, 0)).toBe(-Infinity);
      expect(OrValue(NaN, 0)).toBe(0);           // Second value is 0
      expect(OrValue(0, NaN)).toBe(NaN);         // Second value is NaN
    });
  });

});

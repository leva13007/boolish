import { AndValue } from '../functions/AndValue';

describe('Tests for `AndValue` function', () => {

  describe('Should return the second value when both are truthy', () => {
    test('Truthy primitives and objects', () => {
      expect(AndValue(true, 1)).toBe(1);
      expect(AndValue('hello', 1)).toBe(1);
      expect(AndValue({}, [])).toEqual([]);
      expect(AndValue(Infinity, -1)).toBe(-1);
      expect(AndValue(Symbol('symbol'), 'non-empty string')).toBe('non-empty string');
    });
  });

  describe('Should return the first falsy value when one or both values are falsy', () => {
    test('Falsy and truthy combinations', () => {
      expect(AndValue(false, 1)).toBe(false);
      expect(AndValue('', 'hello')).toBe('');
      expect(AndValue(0, {})).toBe(0);
      expect(AndValue(undefined, [])).toBe(undefined);
      expect(AndValue(null, Symbol('symbol'))).toBe(null);
      expect(AndValue(NaN, () => {})).toBe(NaN);
    });

    test('Both values are falsy', () => {
      expect(AndValue(false, 0)).toBe(false);
      expect(AndValue('', undefined)).toBe('');
      expect(AndValue(null, NaN)).toBe(null);
    });
  });

  describe('Additional cases', () => {
    test('Boolean coercion with BigInt values', () => {
      expect(AndValue(BigInt(1), BigInt(1))).toBe(BigInt(1));
      expect(AndValue(BigInt(0), BigInt(1))).toBe(BigInt(0));
    });

    test('Empty structures', () => {
      expect(AndValue([], {})).toEqual({});
      expect(AndValue([], null)).toBe(null);
      expect(AndValue({}, undefined)).toBe(undefined);
    });

    test('Special cases with Infinity', () => {
      expect(AndValue(Infinity, Infinity)).toBe(Infinity);
      expect(AndValue(Infinity, -Infinity)).toBe(-Infinity);
      expect(AndValue(-Infinity, 0)).toBe(0);
    });
  });

});

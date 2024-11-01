import { And } from '../functions/And';

describe('Tests for `And` function', () => {

  describe('Should return `true` when both values are truthy', () => {
    test('Truthy primitives and objects', () => {
      expect(And(true, 1)).toBe(true);
      expect(And('hello', 1)).toBe(true);
      expect(And({}, [])).toBe(true);
      expect(And(Infinity, -1)).toBe(true);
      expect(And(Symbol('symbol'), () => {})).toBe(true);
    });
  });

  describe('Should return `false` when at least one value is falsy', () => {
    test('Falsy and truthy combinations', () => {
      expect(And(false, 1)).toBe(false);
      expect(And('', 'hello')).toBe(false);
      expect(And(0, {})).toBe(false);
      expect(And(undefined, [])).toBe(false);
      expect(And(null, Symbol('symbol'))).toBe(false);
      expect(And(NaN, () => {})).toBe(false);
    });

    test('Both values are falsy', () => {
      expect(And(false, 0)).toBe(false);
      expect(And('', undefined)).toBe(false);
      expect(And(null, NaN)).toBe(false);
    });
  });

  describe('Additional cases', () => {
    test('Boolean coercion with BigInt values', () => {
      expect(And(BigInt(1), BigInt(1))).toBe(true);
      expect(And(BigInt(0), BigInt(1))).toBe(false);
    });

    test('Empty structures', () => {
      expect(And([], {})).toBe(true);       // Both are truthy
      expect(And([], null)).toBe(false);    // Array is truthy, null is falsy
      expect(And({}, undefined)).toBe(false); // Object is truthy, undefined is falsy
    });

    test('Special cases with Infinity', () => {
      expect(And(Infinity, Infinity)).toBe(true);
      expect(And(Infinity, -Infinity)).toBe(true);
      expect(And(-Infinity, 0)).toBe(false);
    });
  });

});

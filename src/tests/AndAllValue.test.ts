import { AndAllValue } from '../functions/AndAllValue';

describe('Tests for `AndAllValue` function', () => {

  describe('Should return the last truthy value when all are truthy', () => {
    test('Truthy primitives and objects', () => {
      expect(AndAllValue(true, 1, 'hello', {})).toEqual({});
      expect(AndAllValue('non-empty', 42, [], () => {})).toBeInstanceOf(Function);
      expect(typeof AndAllValue(Infinity, -1, Symbol('symbol'))).toBe('symbol');
    });
  });

  describe('Should return the first falsy value when one or more values are falsy', () => {
    test('Falsy and truthy combinations', () => {
      expect(AndAllValue(true, 0, 'hello')).toBe(0);
      expect(AndAllValue(false, 1, {})).toBe(false);
      expect(AndAllValue('text', undefined, {})).toBe(undefined);
      expect(AndAllValue(NaN, 'non-empty')).toBe(NaN);
    });

    test('Multiple falsy values', () => {
      expect(AndAllValue(false, 0, '')).toBe(false);
      expect(AndAllValue(undefined, null, NaN)).toBe(undefined);
    });
  });

  describe('Edge cases', () => {
    test('Should throw an error when no arguments are provided', () => {
      expect(() => AndAllValue()).toThrow('AndAllValue requires at least one argument');
    });

    test('Single truthy value', () => {
      expect(AndAllValue('single')).toBe('single');
      expect(AndAllValue(1)).toBe(1);
    });

    test('Single falsy value', () => {
      expect(AndAllValue(0)).toBe(0);
      expect(AndAllValue(null)).toBe(null);
      expect(AndAllValue(undefined)).toBe(undefined);
    });
  });

});

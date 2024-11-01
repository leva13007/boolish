import { AndAll } from '../functions/AndAll';

describe('Tests for `AndAll` function', () => {

  describe('Should return `true` when all values are truthy', () => {
    test('Truthy primitives and objects', () => {
      expect(AndAll(true, 1, 'hello', {})).toBe(true);
      expect(AndAll('non-empty', 42, [], () => {})).toBe(true);
      expect(AndAll(Infinity, -1, Symbol('symbol'))).toBe(true);
    });
  });

  describe('Should return `false` when at least one value is falsy', () => {
    test('Falsy and truthy combinations', () => {
      expect(AndAll(true, 0, 'hello')).toBe(false);
      expect(AndAll(false, 1, {})).toBe(false);
      expect(AndAll('text', undefined, {})).toBe(false);
      expect(AndAll(NaN, 'non-empty')).toBe(false);
    });

    test('Multiple falsy values', () => {
      expect(AndAll(false, 0, '')).toBe(false);
      expect(AndAll(undefined, null, NaN)).toBe(false);
    });
  });

  describe('Edge cases', () => {
    test('Should throw an error when no arguments are provided', () => {
      expect(() => AndAll()).toThrow('AndAll requires at least one argument');
    });

    test('Single truthy value', () => {
      expect(AndAll('single')).toBe(true);
      expect(AndAll(1)).toBe(true);
    });

    test('Single falsy value', () => {
      expect(AndAll(0)).toBe(false);
      expect(AndAll(null)).toBe(false);
      expect(AndAll(undefined)).toBe(false);
    });
  });

});

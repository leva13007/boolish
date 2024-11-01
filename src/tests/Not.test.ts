import { Not } from '../functions/Not';

describe('Tests for `Not` function', () => {
  
  describe('Should return `true` for falsy values', () => {
    test('Falsy primitives', () => {
      expect(Not(false)).toBe(true);
      expect(Not('')).toBe(true);
      expect(Not(0)).toBe(true);
      expect(Not(undefined)).toBe(true);
      expect(Not(null)).toBe(true);
      expect(Not(NaN)).toBe(true);
      expect(Not(BigInt(0))).toBe(true);
    });
  });

  describe('Should return `false` for truthy values', () => {
    test('Truthy primitives and objects', () => {
      expect(Not(true)).toBe(false);
      expect(Not('hello')).toBe(false);
      expect(Not(1)).toBe(false);
      expect(Not(-1)).toBe(false);
      expect(Not(Infinity)).toBe(false);
      expect(Not(-Infinity)).toBe(false);
      expect(Not(BigInt(1))).toBe(false);
    });

    test('Objects and arrays', () => {
      expect(Not({})).toBe(false);
      expect(Not([])).toBe(false);
      expect(Not(new Object())).toBe(false);
    });

    test('Special objects', () => {
      expect(Not(new Date())).toBe(false);
      expect(Not(new Map())).toBe(false);
      expect(Not(new Set())).toBe(false);
      expect(Not(new WeakMap())).toBe(false);
      expect(Not(new WeakSet())).toBe(false);
      expect(Not(/abc/)).toBe(false); // RegExp
    });

    test('String with spaces', () => {
      expect(Not(' ')).toBe(false);
      expect(Not('\n')).toBe(false);
      expect(Not('\t')).toBe(false);
    });

    test('Floating-point numbers', () => {
      expect(Not(0.1)).toBe(false);
      expect(Not(-0.1)).toBe(false);
    });

    test('Functions and Symbols', () => {
      expect(Not(() => {})).toBe(false);
      expect(Not(Symbol('symbol'))).toBe(false);
    });

    test('globalThis', () => {
      expect(Not(globalThis)).toBe(false);
    });
  });

});

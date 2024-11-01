import { AndValue } from './AndValue';

export function AndAllValue(...args: unknown[]): unknown {
  if (args.length === 0) {
    throw new Error('AndAllValue requires at least one argument');
  }
  return args.reduce((acc, current) => AndValue(acc, current));
}

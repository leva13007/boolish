import { And } from './And';

export function AndAll(...args: unknown[]): boolean {
  if (args.length === 0) {
    throw new Error('AndAll requires at least one argument');
  }
  return args.reduce<boolean>((acc, current) => And(acc, current), true);
}

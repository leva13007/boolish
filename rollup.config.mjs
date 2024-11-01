import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/boolish.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/boolish.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/boolish.umd.js',
      format: 'umd',
      name: 'Boolish'
    }
  ],
  plugins: [typescript(), resolve(), commonjs()]
};

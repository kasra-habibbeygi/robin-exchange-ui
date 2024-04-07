/* eslint-disable @typescript-eslint/no-var-requires */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-minification';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                exports: 'named'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
                exports: 'named'
            }
        ],
        plugins: [terser(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })]
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
];

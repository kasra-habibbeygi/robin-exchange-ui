import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-minification';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json' assert { type: 'json' };

export default [
    // Core bundle
    {
        input: 'src/core/index.ts',
        output: [
            {
                file: 'dist/core/index.js',
                format: 'cjs',
                sourcemap: true,
                exports: 'named'
            },
            {
                file: 'dist/core/index.esm.js',
                format: 'esm',
                sourcemap: true,
                exports: 'named'
            }
        ],
        plugins: [terser(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), peerDepsExternal()],
        external: Object.keys(packageJson.peerDependencies || {})
    },
    // Types
    {
        input: 'src/core/index.ts',
        output: [{ file: 'dist/core/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
];

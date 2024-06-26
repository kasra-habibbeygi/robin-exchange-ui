import { terser } from 'rollup-plugin-minification';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import jsonPlugin from '@rollup/plugin-json';
import packageJson from './package.json' assert { type: 'json' };

const createConfig = (input, outputDir) => [
    {
        input,
        output: [
            {
                file: `dist/${outputDir}/index.js`,
                format: 'cjs',
                sourcemap: true,
                exports: 'named'
            },
            {
                file: `dist/${outputDir}/index.esm.js`,
                format: 'esm',
                sourcemap: true,
                exports: 'named'
            }
        ],
        plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), terser(), jsonPlugin()],
        external: Object.keys(packageJson.peerDependencies || {})
    },
    // Types
    {
        input,
        output: [{ file: `dist/${outputDir}/index.d.ts`, format: 'es' }],
        plugins: [dts()]
    }
];

export default [
    ...createConfig('src/core/index.ts', 'core'),
    ...createConfig('src/hooks/index.ts', 'hooks'),
    ...createConfig('src/typography/index.ts', 'typography'),
    ...createConfig('src/icons/index.ts', 'icons')
];

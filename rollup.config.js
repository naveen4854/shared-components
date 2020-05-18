/* eslint-disable prettier/prettier */
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import postcss from 'rollup-plugin-postcss';
// import path from 'path';
// import smartAsset from "rollup-plugin-smart-asset"

import packageJson from "./package.json";

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        copy({
            targets: [
                // { src: 'src/index.html', dest: 'dist/public' },
                // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
                { src: 'src/resources/fonts', dest: 'dist' },
                { src: 'src/resources/images', dest: 'dist' }
            ]
        }),
        postcss({
            extract: true,
            // Or with custom file name
            // extract: path.resolve('dist/index.css')
        }),
        external({
            includeDependencies: true
        }),
        // peerDepsExternal(),
        resolve(
            {
                // pass custom options to the resolve plugin
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            }
        ),
        commonjs(),
        typescript(),
        sass({
            insert: true
        })
    ],
    // external: ['primereact']
};
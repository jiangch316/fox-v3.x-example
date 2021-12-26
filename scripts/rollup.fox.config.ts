/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-23 10:16:33
 */
import { join } from 'path'
import { RollupOptions } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

// fox options
export let options = (env = 'production') => {
    let isProduction = env == 'production'
    let options: RollupOptions = {
        input: join(__dirname, '../src/index.ts'),
        output: {
            file: join(__dirname, '../packages/fox/libs/index.js'),
            format: 'esm',
            name: 'fox',
            sourcemap: !isProduction
        },
        plugins: [
            scss(),
            nodeResolve({ preferBuiltins: true, browser: true }), // 消除碰到 node.js 模块时⚠警告
            commonjs(),
            json({
                // All JSON files will be parsed by default,
                // but you can also specifically include/exclude files
                include: 'node_modules/**',
                exclude: ['node_modules/dog/**'],

                // for tree-shaking, properties will be declared as
                // variables, using either `var` or `const`
                preferConst: true, // Default: false

                // specify indentation for the generated default export —
                // defaults to '\t'
                indent: '  ',

                // ignores indent and generates the smallest code
                compact: true, // Default: false

                // generate a named export for every property of the JSON object
                namedExports: true // Default: true
            }),
            esbuild({
                // All options are optional
                include: /\.[jt]sx?$/, // default, inferred from `loaders` option
                exclude: /node_modules/, // default
                // watch: process.argv.includes('--watch'), // rollup 中有配置
                sourceMap: false, // default
                minify: process.env.NODE_ENV === 'production',
                target: 'es2017', // default, or 'es20XX', 'esnext'
                jsxFactory: 'React.createElement',
                jsxFragment: 'React.Fragment',
                // Like @rollup/plugin-replace
                define: {
                    __VERSION__: '"x.y.z"'
                },
                // Add extra loaders
                loaders: {
                    // Add .json files support
                    // require @rollup/plugin-commonjs
                    '.json': 'json',
                    // Enable JSX in .js files too
                    '.js': 'jsx'
                }
            }),
            alias({
                entries: []
            })
        ],
        external: ['vue']
    }
    if (isProduction && options.plugins != undefined) {
        options.plugins.push(terser())
    }
    return options
}

// dts options
export let dtsOptions = () => {
    const options: RollupOptions = {
        // 生成 .d.ts 类型声明文件
        input: join(__dirname, '../src/index.ts'),
        output: {
            file: join(__dirname, '../packages/fox/libs/index.d.ts'),
            format: 'es'
        },
        plugins: [dts(), scss({ output: false })],
        external: ['vue']
    }
    return options
}

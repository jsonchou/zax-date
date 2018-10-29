import babel from 'rollup-plugin-babel';
import {
    uglify
} from "rollup-plugin-uglify";

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';


const tps = ['umd', 'esm', 'iife'];

let cfgs = [];

tps.map(item => {
    cfgs.push({
        input: 'src/zax-date.js',
        external: ['jquery', 'moment', 'lodash'],
        output: {
            format: item,
            file: `libs/${item}.js`,
            name: 'zaxDate',
            globals: {
                jquery: '$',
                lodash: '_',
            }
        },
        plugins: [
            nodeResolve({
                module: true, 
                jsnext: true,
                main: true
            }),
            commonjs({
                include: 'node_modules/**',
                exclude: [],
            }),

            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true
            }),
            // uglify({
            //     sourcemap: false,
            //     output: {
            //         comments: false,
            //     }
            // })
        ],
    })
})

export default cfgs;
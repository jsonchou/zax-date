 import os from 'os';

 import babel from 'rollup-plugin-babel';
 import {
     uglify
 } from "rollup-plugin-uglify";

 import {
     terser
 } from 'rollup-plugin-terser'

 import commonjs from 'rollup-plugin-commonjs';
 import nodeResolve from 'rollup-plugin-node-resolve';

 //  system, amd, cjs, es, iife, umd
 //  const tps = ['system', 'amd', 'cjs', 'es', 'iife', 'umd'];

 const tps = ['es'];


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
             terser({
                 sourcemap: false,
                 output: {
                     comments: false,
                 },
                 //  numWorkers: os.cpus().length - 1
             })
         ],
     })
 })

 export default cfgs;
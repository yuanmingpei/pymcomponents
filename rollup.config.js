// const resolve = require('@rollup/plugin-node-resolve')
// const babel = require('@rollup/plugin-babel') //rollup的babel插件
// const postcss = require('rollup-plugin-postcss')
// const replace = require('rollup-plugin-replace')
// const commonjs = require('@rollup/plugin-commonjs')
// const uglify = require('rollup-plugin-uglify')

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve' //如果项目中引用了第三方模块（如lodash等），使用resolve可以识别
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
// import externalGlobals from 'rollup-plugin-external-globals'

const env = process.env.NODE_ENV

const config = {
  input: 'index.js',
  output: [
    {
      dir: 'lib',
      sourcemap: true,
      entryFileNames: '[name].umd.js',
      format: 'umd',
      name: 'index', //在构建umd模块时需要对模块命名，这里随便取一个
      globals: {
        react: 'React'
      }
    },
    {
      dir: 'lib',
      sourcemap: true,
      entryFileNames: '[name].esm.js',
      format: 'esm',
      globals: {
        react: 'React'
      }
    },
    {
      dir: 'lib',
      sourcemap: true,
      entryFileNames: '[name].cjs.js',
      format: 'cjs',
      globals: {
        react: 'React'
      }
    }
  ],

  // output: {
  //   dir: 'lib',
  //   format: 'cjs',
  //   // preserveModules: true,
  //   // preserveModulesRoot: "lib",
  //   sourcemap: true
  // },

  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled' // babelHelpers: 'runtime' //Bable 插件有一个babelHelpers 的配置参数，取值为’bundled’ | ‘runtime’ | ‘inline’ | ‘external’，//默认是’bundled’,会把bable 的一些helpers 函数直接打包进去
    }),
    // externalGlobals({
    //   react: 'React' //全局模块别名声明
    // }),
    commonjs(), //由于 Node 模块使用的是 CommonJS，它并不被 Rollup 兼容因此不能直接使用。
    postcss({
      extract: false
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    env === 'production' && uglify()
  ]
  // plugins: [
  //   resolve(),

  //   babel({
  //     exclude: 'node_modules/**'
  //   }),
  //   commonjs(),
  //   postcss({
  //     extract: false
  //   }),
  //   replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  //   env === 'production' && uglify()
  // ]
}

export default config

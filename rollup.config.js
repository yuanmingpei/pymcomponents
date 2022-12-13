import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const config = {
  input: 'index.js',
  output: [
    {
      dir: 'lib',
      sourcemap: true,
      entryFileNames: '[name].umd.js',
      format: 'umd',
      name: 'index', //在构建umd模块时需要对模块命名，不写报错
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
    },
    {
      dir: 'lib',
      sourcemap: true,
      entryFileNames: '[name].iife.js',
      format: 'iife',
      globals: {
        react: 'React'
      },
      name: 'index'
    }
  ],
  /**
   *  项目中需要引用第三方库，但是不需要打包进自己的npm包中，减少自己的包中的体积。
   */
  external: ['react'],
  plugins: [
    /**
     * 项目中引入第三方npm模块（比如lodash），需加入@rollup/plugin-node-resolve
     * 将我们代码模块和第三方模块合并
     */
    resolve(),
    /**
     * Babel插件，排除node_modules文件夹。
     * Bable 插件有一个babelHelpers 的配置参数，取值为’bundled’ | ‘runtime’ | ‘inline’ | ‘external’
     * 默认是’bundled’,会把bable 的一些helpers 函数直接打包进去
     */
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    /**
     * rollup.js 编译源码中的模块引用默认只支持 ES6+的模块方式。
     * 由于 Node 模块使用的是 CommonJS，它并不被 Rollup 兼容因此不能直接使用。需要引用@rollup/plugin-commonjs插件
     */
    commonjs(),
    /**
     * 对于css预处理器的支持，我这里采用默认注入css
     * 具体的更多的配置见rollup-plugin-postcss用法
     * https://www.npmjs.com/package/rollup-plugin-postcss
     */
    postcss({
      modules: true
    }),
    /**
     * 避免发现打包之后的代码中有process.env.NODE_ENV,非node环境
     */
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    /**
     * 生产环境压缩代码
     */
    env === 'production' && uglify()
  ]
}

export default config

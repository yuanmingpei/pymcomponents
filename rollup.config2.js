const path = require('path')
const resolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const postcss = require('rollup-plugin-postcss')
const replace = require('rollup-plugin-replace')
const commonjs = require('@rollup/plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
// const ts = require("rollup-plugin-typescript2");
// const dts = require("rollup-plugin-dts");
// const fs = require("fs");
const env = process.env.NODE_ENV
console.log(env)
const config = {
  input: 'index.js',
  output: {
    dir: 'lib',
    format: 'cjs',
    // preserveModules: true,
    // preserveModulesRoot: "lib",
    sourcemap: true
  },
  external: [
    'react'
    // '@ctrip/nfes/util',
    // '@ctrip/nfes-ui-icons/lib/icons/BroadcastShape',
    // '@ctrip/nfes/util/getRequestEnv',
    // '@ctrip/nfes/util/isInCtripApp',
    // '@ctrip/nfes/ui/Loading',
    // '@ctrip/nfes-weixin',
    // '@ctrip/nfes-ui/lib/components/ScrollViewNative',
    // '@ctrip/nfes-ui/lib/components/EmptyState',
    // '@ctrip/nfes-util',
    // '@ctrip/nfes/util/crypt/base64',
    // '@ctrip/nfes/model',
    // '@ctrip/nfes/member',
    // '@ctrip/nfes/util/getIphoneType',
    // '@ctrip/nfes/store/LocalStorage',
    // '@ctrip/nfes/util/querystring',
    // '@ctrip/nfes/ui/Alert',
    // '@ctrip/nfes/ui/Toast',
    // '@ctrip/nfes/hybridMember/memberLogin',
    // '@ctrip/nfes/h5Member/memberLogin'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    postcss({
      extract: false
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    env === 'production' && uglify()
  ]
}

// fs.readdirSync("./src/").forEach((item) => {
//   const bool = fs
//     .lstatSync(path.resolve(__dirname, "./src/" + item))
//     .isDirectory();
//   if (bool) {
//     config.plugins.push(
//       postcss({
//         include: `**/${item}/index.module.scss`,
//         extract: path.resolve(__dirname, `lib/${item}/style/index.css`),
//       })
//     );
//   }
// });

// const configDTS = {
//   input: "./src/index.ts",
//   output: {
//     file: path.resolve(__dirname, "./lib/index.d.ts"),
//     format: "es",
//   },
//   plugins: [dts.default()],
// };

module.exports = [config]

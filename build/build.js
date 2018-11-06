import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify }  from 'rollup-plugin-uglify'
import { eslint } from 'rollup-plugin-eslint'
import packages from '../package.json'

const config = {
  input: 'src/index.js',
  output: {
    file: `lib/index.${process.env.TYPE}.js`,
    format: process.env.TYPE,
    name: 'LangAdapter',
  },
  plugins: [
    // eslint(),
    babel({
      runtimeHelpers: true,
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
	  process.env.TYPE === 'umd' ? uglify() : null
  ],
}

export default config

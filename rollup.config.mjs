import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: './index.js',
  output: [{
    file: './index.bundle.js',
    format: 'es',
    preferConst: true,
    sourcemap: true
  }],
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    commonjs(),
    sourcemaps(),
    nodeResolve()
  ]
};

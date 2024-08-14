import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
  input: 'src/app.js',
  output: { file: "dist/index.js", plugins: [terser()] },
  plugins: [
    minifyHTML(),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist' }
      ]
    })
  ]
};
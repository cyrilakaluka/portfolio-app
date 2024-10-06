import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const DIST_DIR = 'dist';

export default {
  input: 'src/app.js',
  output: { file: "dist/index.js", plugins: [terser()] },
  plugins: [
    minifyHTML(),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist' }
      ]
    }),
    serve({
      port: 3000,
      open: true,
      contentBase: DIST_DIR,
    }),
    livereload({
      watch: DIST_DIR,
      port: 3000,
    })
  ]
};
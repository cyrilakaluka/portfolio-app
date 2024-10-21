import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const DIST_DIR = 'dist';
const SERVER_PORT = 3000;
const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  input: 'src/app.js',
  output: { file: `${DIST_DIR}/index.js`, plugins: [terser()] },
  plugins: [
    minifyHTML(),
    copy({
      targets: [
        { src: 'public/*', dest: DIST_DIR },
      ]
    }),
    isDevelopment && serve({
      port: SERVER_PORT,
      open: true,
      contentBase: DIST_DIR,
    }),
    isDevelopment && livereload({
      watch: DIST_DIR,
      port: SERVER_PORT,
      delay: 1000
    })
  ]
};
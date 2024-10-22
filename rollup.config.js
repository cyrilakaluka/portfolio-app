import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import watch from 'rollup-plugin-watch';

const DIST_DIR = 'dist';
const PUBLIC_DIR = 'public';
const SERVER_PORT = 3000;
const isDevelopment = process.env.NODE_ENV === 'development';
const devPlugins = isDevelopment && [
  serve({
    port: SERVER_PORT,
    open: true,
    contentBase: DIST_DIR,
  }),
  livereload({
    watch: DIST_DIR,
    port: SERVER_PORT,
    delay: 1000
  }),
  watch({ dir: PUBLIC_DIR })
] || [];

export default {
  input: 'src/app.js',
  output: { file: `${DIST_DIR}/index.js`, plugins: [terser()] },
  plugins: [
    minifyHTML(),
    copy({
      targets: [
        { src: PUBLIC_DIR, dest: DIST_DIR },
      ]
    }),
    ...devPlugins
  ]
};

import babel from 'rollup-plugin-babel';

export default {
  input: `index.js`,
  output: [
    { file: 'dist/class-perf.js', name: 'classPerf', format: 'umd' },
    { file: 'dist/class-perf.es.js', format: 'es' }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}

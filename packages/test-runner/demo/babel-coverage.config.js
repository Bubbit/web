const { fromRollup } = require('@web/dev-server-rollup');
const { babel: rollupBabel } = require('@rollup/plugin-babel');

const babel = fromRollup(rollupBabel);

module.exports = /** @type {import('@web/test-runner').TestRunnerConfig} */ ({
  rootDir: '../..',
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    nativeInstrumentation: false,
    threshold: {
      statements: 55,
      branches: 90,
      functions: 50,
      lines: 50
    },
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      plugins: [require.resolve('babel-plugin-istanbul')],
    }),
  ],
});

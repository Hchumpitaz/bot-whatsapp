const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
    input: 'index.js',
    output: {
        file: 'lib/io/bundle.cjs',
        format: 'cjs',
    },
    plugins: [commonjs()],
}
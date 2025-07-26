module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['src/basics/breakpointTokens/breakpointTokens.css']
    },
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'cascade-layers': false,
        'nesting-rules': false
      }
    }
  }
};

module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
    {
      files: '*.scss',
      options: {
        singleQuote: false,
        parser: 'scss',
        tabWidth: 2,
      },
    },
  ],
}

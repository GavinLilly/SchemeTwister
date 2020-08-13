module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'docs',
      'app',
      'api',
      'misc',
      'legendizer-lib',
      'deps',
      '*'
    ]]
  }
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'docs',
      'app',
      'api',
      'misc',
      'base-lib',
      'bystander-lib',
      'gameset-lib',
      'henchmen-lib',
      'hero-lib',
      'mastermind-lib',
      'scheme-lib',
      'villains-lib',
      '*'
    ]]
  }
};

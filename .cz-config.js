module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests or correcting existing tests',
    },
    {
      value: 'build',
      name: 'build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
    {
      value: 'ci',
      name: 'ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    },
    {
      value: 'chore',
      name: "chore:    Other changes that don't modify src or test files",
    },
    { value: 'revert', name: 'revert:   Reverts a previous commit' },
    {
      value: 'wip',
      name: 'wip: a temporary commit that will be rewritten later',
    },
  ],
  scopes: [
    { name: 'app' },
    { name: 'libtwister' },
    { name: 'gamesets' },
    { name: 'deps' },
    { name: 'deps-dev' },
    { name: 'misc' },
    { name: 'docs' },
    { name: 'release' },
    { name: '*' },
  ],
};

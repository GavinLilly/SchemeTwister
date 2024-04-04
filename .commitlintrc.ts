import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'app',
        'libtwister',
        'gamesets',
        'deps',
        'deps-dev',
        'misc',
        'docs',
        'release',
        '*',
      ],
    ],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'wip',
      ],
    ],
  },
  ignores: [
    (commit) => commit.includes('skip-ci'),
    (commit) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(commit),
  ],
};

module.exports = configuration;

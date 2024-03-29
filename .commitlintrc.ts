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
        'release',
        'revert',
        'style',
        'test',
        'wip',
      ],
    ],
  },
  ignores: [(commit) => commit.includes('skip-ci')],
};

module.exports = configuration;

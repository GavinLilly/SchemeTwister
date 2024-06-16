/* eslint-disable */
export default {
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/libs/web-app/feature-randomize',
  setupFiles: ['jest-wake-lock-mock'],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {},
  displayName: 'web-app-feature-randomize',

  transform: {
    '^.+.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};

/* eslint-disable */
export default {
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/libtwister',
  globals: {},
  displayName: 'libtwister',
  testEnvironment: 'node',
};

module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/web-api',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-api',
  testEnvironment: 'node',
};

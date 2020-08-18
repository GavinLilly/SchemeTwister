module.exports = {
  name: 'web-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-api',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
};

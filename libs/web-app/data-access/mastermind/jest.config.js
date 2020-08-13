module.exports = {
  name: 'web-app-data-access-mastermind',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-app/data-access/mastermind',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

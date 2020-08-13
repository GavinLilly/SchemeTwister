module.exports = {
  name: 'web-app-data-access-villains',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-app/data-access/villains',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

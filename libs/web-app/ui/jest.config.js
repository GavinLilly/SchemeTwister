module.exports = {
  name: 'web-app-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web-app/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

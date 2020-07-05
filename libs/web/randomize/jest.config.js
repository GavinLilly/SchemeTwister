module.exports = {
  name: 'web-randomize',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/randomize',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

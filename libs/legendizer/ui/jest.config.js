module.exports = {
  name: 'legendizer-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/legendizer/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

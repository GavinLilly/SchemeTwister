module.exports = {
  name: 'legendizer-feature-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/legendizer/feature-home',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

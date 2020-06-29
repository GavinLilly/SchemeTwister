module.exports = {
  name: 'legendizer-home-screen',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/legendizer/home-screen',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

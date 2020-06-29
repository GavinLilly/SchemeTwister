module.exports = {
  name: 'legendizer-randomize',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/legendizer/randomize',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

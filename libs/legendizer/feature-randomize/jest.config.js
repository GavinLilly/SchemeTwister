module.exports = {
  name: 'legendizer-feature-randomize',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/legendizer/feature-randomize',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

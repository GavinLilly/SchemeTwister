module.exports = {
  name: 'legendizer-ui-villain-deck',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/legendizer/ui-villain-deck',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

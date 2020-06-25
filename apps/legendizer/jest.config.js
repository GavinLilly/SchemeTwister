module.exports = {
  name: 'legendizer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/legendizer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

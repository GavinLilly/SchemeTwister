module.exports = {
  name: 'web-app-data-access-henchmen',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-app/data-access/henchmen',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

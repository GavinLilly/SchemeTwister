module.exports = {
  name: 'web-app-data-access-num-players',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/web-app/data-access/num-players',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

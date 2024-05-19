import { beforeAll, describe, expect, it } from 'vitest';

import { SeriesMeta } from './seriesMeta';

const id = 'f45cf2d1-192e-43d2-997f-4a69359df375';
const seriesName = 'Test series';
const seriesDescription = 'Test description';

describe('SeriesMeta', () => {
  let series: SeriesMeta;

  beforeAll(() => {
    series = new SeriesMeta(id, seriesName, seriesDescription, {
      twist: 'FOOBAR',
    });
  });

  describe('id', () =>
    it('should return the ID', () => expect(series.id).toBe(id)));

  describe('seriesName', () =>
    it('should return the Series Name', () =>
      expect(series.seriesName).toBe(seriesName)));

  describe('description', () =>
    it('should return the Series Description', () =>
      expect(series.description).toBe(seriesDescription)));

  describe('nomenclature', () =>
    it('should return the overridden nomenclature', () =>
      expect(series.nomenclature.twist).toEqual('FOOBAR')));

  it('should give the default nomenclature if nothing specific is set', () =>
    expect(
      new SeriesMeta(id, seriesName, seriesDescription).nomenclature.twist
    ).toEqual('Twist'));
});

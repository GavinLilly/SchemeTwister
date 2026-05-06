import { testSeries } from '@schemetwister/libtwister/testing';

import { marvelSeries } from './marvel.series';

testSeries({
  series: marvelSeries,
  coreBoxCount: 1,
  bigBoxCount: 6,
  mediumBoxCount: 3,
  smallBoxCount: 21,
  promoSetCount: 1,
});

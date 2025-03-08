import { testSeries } from '@schemetwister/libtwister/testing';

import { marvelStudiosSeries } from './marvelStudios.series';

testSeries({
  series: marvelStudiosSeries,
  coreBoxCount: 2,
  mediumBoxCount: 1,
  smallBoxCount: 3,
});

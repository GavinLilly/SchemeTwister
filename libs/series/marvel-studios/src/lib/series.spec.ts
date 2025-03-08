import { seriesTest } from '@schemetwister/libtwister/testing';

import { marvelStudiosSeries } from './marvelStudios.series';

seriesTest({
  series: marvelStudiosSeries,
  coreBoxCount: 2,
  mediumBoxCount: 1,
  smallBoxCount: 3,
});

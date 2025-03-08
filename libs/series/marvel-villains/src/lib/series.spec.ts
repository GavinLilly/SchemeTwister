import { seriesTest } from '@schemetwister/libtwister/testing';

import { marvelVillainsSeries } from './marvelVillains.series';

seriesTest({ series: marvelVillainsSeries, coreBoxCount: 1, smallBoxCount: 1 });

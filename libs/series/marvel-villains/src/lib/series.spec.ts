import { testSeries } from '@schemetwister/libtwister/testing';

import { marvelVillainsSeries } from './marvelVillains.series';

testSeries({ series: marvelVillainsSeries, coreBoxCount: 1, smallBoxCount: 1 });

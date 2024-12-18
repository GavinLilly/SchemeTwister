import { seriesTest } from '@schemetwister/libtwister/testing';

import { marvelSeries } from './marvel.series';

seriesTest(marvelSeries, 1, 6, 3, 21, 1);

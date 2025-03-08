import { testSeries } from '@schemetwister/libtwister/testing';

import { buffySeries } from './buffy.series';

testSeries({ series: buffySeries, coreBoxCount: 1 });

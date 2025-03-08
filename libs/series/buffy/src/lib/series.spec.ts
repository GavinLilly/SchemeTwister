import { seriesTest } from '@schemetwister/libtwister/testing';

import { buffySeries } from './buffy.series';

seriesTest({ series: buffySeries, coreBoxCount: 1 });

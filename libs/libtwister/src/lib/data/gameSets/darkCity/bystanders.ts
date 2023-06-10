import { Bystander } from '../../../model';

import { META } from './meta';

export const NEWS_REPORTER = new Bystander({
  id: 'bdad80b0-df45-4804-ac94-081752709bf5',
  name: 'News Reporter',
  copies: 4,
  victoryPoints: 1,
  gameSet: META,
});

export const PARAMEDIC = new Bystander({
  id: '6fb63da9-3d54-4ca3-b581-0f44c6cbed58',
  name: 'Paramedic',
  copies: 3,
  victoryPoints: 1,
  gameSet: META,
});

export const RADIATION_SCIENTIST = new Bystander({
  id: 'ab14b5f2-1665-4162-9d78-88ace8bfac23',
  name: 'Radiation Scientist',
  copies: 4,
  victoryPoints: 1,
  gameSet: META,
});

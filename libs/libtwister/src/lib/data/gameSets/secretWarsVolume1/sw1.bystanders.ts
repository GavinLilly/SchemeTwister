import { Bystander } from '../../../model';

import { META } from './sw1.meta';

export const BANKER = new Bystander({
  id: '2fb373d6-57ee-4dff-9575-00d6a6185e88',
  name: 'Banker',

  copies: 3,
  gameSet: META,
  victoryPoints: 1,
});

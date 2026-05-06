import { Bystander, CARD_TYPE, Hero } from '../model';

import { TEST_GAME_SET_META_1 } from './gameSets';

export const TEST_BYSTANDER_1 = new Bystander({
  id: 'ef6e37bb-9e18-4e26-816c-2b60e3b7d163',
  name: 'Test bystander 1',
  copies: 1,
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_BYSTANDER_AS_HERO = new Hero({
  id: 'd6b18cdd-d669-42ff-9bed-31f412ce3fd4',
  name: 'Test bystander as Hero',
  gameSet: TEST_GAME_SET_META_1,
  cardType: CARD_TYPE.bystander,
});

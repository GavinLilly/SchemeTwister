import { IHero , CardType } from '../../../model';
import { AVENGERS, SHIELD } from '../../teams';

import { META } from './meta';

export const BLACK_WIDOW: IHero = {
  id: '5c94b39f-9814-47c2-857b-cd17d6deec0b',
  name: 'Black Widow',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const CAPTAIN_AMERICA: IHero = {
  id: '1a42d8d5-05fe-4140-9aca-78603c5c5825',
  name: 'Captain America',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const HAWKEYE: IHero = {
  id: 'f0ee5af1-a69f-4e01-b668-dbeeccb59e52',
  name: 'Hawkeye',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const HULK: IHero = {
  id: '6a457f77-a0ba-4226-a1e3-0ecc0cdd2e40',
  name: 'Hulk',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const IRON_MAN: IHero = {
  id: 'ed6bd100-9cd8-43a5-8e04-07461f76ead9',
  name: 'Iron Man',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const NICK_FURY: IHero = {
  id: '9a436cbb-f73f-4241-b8bb-8c0146af3ff9',
  name: 'Nick Fury',
  team: SHIELD,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const THOR: IHero = {
  id: 'f39ff646-754d-4dfb-abba-51877c3565f5',
  name: 'Thor',
  team: AVENGERS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

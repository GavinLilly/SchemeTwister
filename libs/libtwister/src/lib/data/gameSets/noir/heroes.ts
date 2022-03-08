import { IHero , CardType } from '../../../model';
import { X_MEN, MARVEL_KNIGHTS, AVENGERS, SPIDER_FRIENDS } from '../../teams';

import { INVESTIGATE } from './keywords';
import { META } from './meta';

export const ANGEL_NOIR: IHero = {
  id: 'a92f6ba6-3f50-463b-a72e-bb22a1fd473d',
  name: 'Angel Noir',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE],
};

export const DAREDEVIL_NOIR: IHero = {
  id: '8bab7eba-8658-4df6-b1e5-6b8929760691',
  name: 'Daredevil Noir',
  team: MARVEL_KNIGHTS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE],
};

export const IRON_MAN_NOIR: IHero = {
  id: '787170aa-5e93-4f82-b403-e20573f05daf',
  name: 'Iron Man Noir',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE],
};

export const LUKE_CAGE_NOIR: IHero = {
  id: '3c5a6236-a9b6-4748-98c6-d516a4719d3a',
  name: 'Luke Cage Noir',
  team: MARVEL_KNIGHTS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE],
};

export const SPIDERMAN_NOIR: IHero = {
  id: '9e8b2b85-8dca-465a-bb6c-0efcfe70eab3',
  name: 'Spider-Man Noir',
  team: SPIDER_FRIENDS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [INVESTIGATE],
};

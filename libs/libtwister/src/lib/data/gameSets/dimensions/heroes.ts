import { IHero , CardType } from '../../../model';
import { MARVEL_KNIGHTS, AVENGERS } from '../../teams';
import { TELEPORT } from '../darkCity/keywords';

import { INVESTIGATE, SWITCHEROO } from './keywords';
import { META } from './meta';

export const JESSICA_JONES: IHero = {
  id: '6812ba8e-8aa9-424f-80b8-d08e70632bd0',
  name: 'Jessica Jones',
  team: MARVEL_KNIGHTS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SWITCHEROO, INVESTIGATE],
};

export const MS_AMERICA: IHero = {
  id: '879ef895-6e85-4bb1-aaf6-84a8c73b4110',
  name: 'Ms. America',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TELEPORT, INVESTIGATE],
};

export const SQUIRREL_GIRL: IHero = {
  id: 'fbdf540f-c4f4-4b93-ad20-84591cd2e577',
  name: 'Squirrel Girl',
  team: AVENGERS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [SWITCHEROO, INVESTIGATE],
};

export const HOWARD_THE_DUCK: IHero = {
  id: '951a5345-2375-4098-b44c-6d819d03d182',
  name: 'Howard the Duck',
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const MAN_THING: IHero = {
  id: '84d256ce-3d98-4ea7-8b51-a599bdcdb5fc',
  name: 'Man-Thing',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TELEPORT],
};

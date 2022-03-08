import { IHero , CardType } from '../../../model';
import { INHUMANS } from '../../teams';
import { TELEPORT } from '../darkCity/keywords';

import {
  ABOMINATION,
  CHOOSE_A_VILLAIN_GROUP,
  THRONES_FAVOR,
  WHEN_RECRUITED,
} from './keywords';
import { META } from './meta';

export const BLACK_BOLT: IHero = {
  id: 'f78985a9-729d-446f-8a03-4c037f4f8fd9',
  name: 'Black Bolt',
  team: INHUMANS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WHEN_RECRUITED, THRONES_FAVOR],
};

export const MEDUSA: IHero = {
  id: 'dd9444f3-c449-4659-9712-2033f3877fc3',
  name: 'Medusa',
  team: INHUMANS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WHEN_RECRUITED, THRONES_FAVOR],
};

export const CRYSTAL: IHero = {
  id: '909a7a01-9a54-4940-abb6-77ff229127ec',
  name: 'Crystal',
  team: INHUMANS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WHEN_RECRUITED, THRONES_FAVOR],
};

export const KARNAK: IHero = {
  id: '8fea3024-3249-436f-b4cc-b58a0de37712',
  name: 'Karnak',
  team: INHUMANS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [WHEN_RECRUITED, CHOOSE_A_VILLAIN_GROUP],
};

export const GORGON: IHero = {
  id: 'bf9a9dee-5187-4286-9af8-29d63d5678c8',
  name: 'Gorgon',
  team: INHUMANS,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [TELEPORT, WHEN_RECRUITED, ABOMINATION],
};

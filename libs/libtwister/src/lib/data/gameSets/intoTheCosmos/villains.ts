import { IVillainGroup , CardType } from '../../../model';


import {
  CELESTIAL_BOONS,
  CONTEST_OF_CHAMPIONS,
  COSMIC_THREAT,
  DANGER_SENSE_ON_VILLAINS,
  SHARDS,
} from './keywords';
import { META } from './meta';

export const ELDERS_OF_THE_UNIVERSE: IVillainGroup = {
  id: 'cbf60874-654b-463f-8278-a19950b8e832',
  name: 'Elders of the Universe',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SHARDS, CONTEST_OF_CHAMPIONS],
};

export const CELESTIALS: IVillainGroup = {
  id: '764fb512-9c83-498a-a68e-8abfa9961e9e',
  name: 'Celestials',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [SHARDS, CELESTIAL_BOONS, COSMIC_THREAT],
};

export const FROM_BEYOND: IVillainGroup = {
  id: '1b1edcd2-b7cc-42dc-9dad-5912de02b4b1',
  name: 'From Beyond',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [COSMIC_THREAT, COSMIC_THREAT],
};

export const BLACK_ORDER_OF_THANOS: IVillainGroup = {
  id: 'aabe7d0a-5f84-4ffc-8d25-8d4e711a5d46',
  name: 'Black Order of Thanos',
  cardType: CardType.VILLAINGROUP,
  gameSetId: META.id,
  keywords: [DANGER_SENSE_ON_VILLAINS],
};

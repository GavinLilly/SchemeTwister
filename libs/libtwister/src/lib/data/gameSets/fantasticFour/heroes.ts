import { IHero , CardType } from '../../../model';
import { FANTASTIC_FOUR } from '../../teams';

import { FOCUS } from './keywords';
import { META } from './meta';

export const HUMAN_TORCH: IHero = {
  id: '8ac6a4c8-e125-45c2-901c-cbcf2e2f3af8',
  name: 'Human Torch',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS],
};

export const INVISIBLE_WOMAN: IHero = {
  id: '9fb4353c-f548-41f5-92a6-216e130604dd',
  name: 'Invisible Woman',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS],
};

export const MR_FANTASTIC: IHero = {
  id: '0f7ac6ef-3896-4005-adbd-d79fcfc57e00',
  name: 'Mr. Fantastic',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS],
};

export const SILVER_SURFER: IHero = {
  id: 'e84d398e-24ac-4518-a235-ef0f3f65a3d8',
  name: 'Silver Surfer',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS],
};

export const THING: IHero = {
  id: 'a45cdee1-852b-4d32-8811-46fec7ba1255',
  name: 'Thing',
  team: FANTASTIC_FOUR,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [FOCUS],
};

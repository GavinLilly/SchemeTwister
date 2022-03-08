import { IHero , CardType } from '../../../model';
import { X_MEN } from '../../teams';

import { MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE } from './keywords';
import { META } from './meta';

export const KARMA: IHero = {
  id: '75500870-adbd-4e41-82f2-7abbb600fd99',
  name: 'Karma',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const MIRAGE: IHero = {
  id: 'b85e6698-2bbd-4792-91d8-decacde3e202',
  name: 'Mirage',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
};

export const SUNSPOT: IHero = {
  id: 'eae8dc76-3544-4f33-8153-ee8931068370',
  name: 'Sunspot',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MOONLIGHT_AND_SUNLIGHT],
};

export const WARLOCK: IHero = {
  id: '445883e2-6050-496d-be6b-a85625be7256',
  name: 'Warlock',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MOONLIGHT_AND_SUNLIGHT],
};

export const WOLFSBANE: IHero = {
  id: 'eaae6612-0802-437c-b1ab-9d4f383501c0',
  name: 'Wolfsbane',
  team: X_MEN,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [MOONLIGHT_AND_SUNLIGHT],
};

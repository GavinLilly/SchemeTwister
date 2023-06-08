import { CardType, Hero } from '../../../model';
import { MARVEL_KNIGHTS } from '../../teams';
import { PATROL } from '../secretWarsVolume2/keywords';
import { MOONLIGHT_AND_SUNLIGHT } from '../theNewMutants/keywords';

import { BLOOD_FRENZY } from './keywords';
import { META } from './meta';

export const BLADE_DAYWALKER = new Hero({
  id: 'b3d5f860-d34c-4f0c-9ebc-1c99341152fe',
  name: 'Blade, Daywalker',
  cardType: CardType.HERO,
  gameSet: META,
  team: MARVEL_KNIGHTS,
  keywords: [PATROL, MOONLIGHT_AND_SUNLIGHT, BLOOD_FRENZY],
});

export const ELSA_BLOODSTONE = new Hero({
  id: 'afad03e0-3579-4672-9616-f78ee976bb8f',
  name: 'Elsa Bloodstone',
  cardType: CardType.HERO,
  gameSet: META,
  team: MARVEL_KNIGHTS,
  keywords: [PATROL],
});

export const MORBIUS = new Hero({
  id: 'e5199a6b-633a-41da-9eaf-df1d01718c0b',
  name: 'Morbius',
  cardType: CardType.HERO,
  gameSet: META,
  team: MARVEL_KNIGHTS,
  keywords: [BLOOD_FRENZY, MOONLIGHT_AND_SUNLIGHT],
});

export const WEREWOLF_BY_NIGHT = new Hero({
  id: '5a5527e0-80a8-4e0b-807f-a1fccc405418',
  name: 'Werewolf by Night',
  cardType: CardType.HERO,
  gameSet: META,
  team: MARVEL_KNIGHTS,
  keywords: [MOONLIGHT_AND_SUNLIGHT, BLOOD_FRENZY],
});

export const WONG = new Hero({
  id: 'a0966095-cd1b-4090-a13c-1cc9ebbc7839',
  name: 'Wong, Master of the Mystic Arts',
  cardType: CardType.HERO,
  gameSet: META,
  team: MARVEL_KNIGHTS,
  keywords: [PATROL, MOONLIGHT_AND_SUNLIGHT],
});

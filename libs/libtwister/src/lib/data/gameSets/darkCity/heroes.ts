import { IHero , CardType } from '../../../model';
import { MARVEL_KNIGHTS, X_FORCE, X_MEN } from '../../teams';

import { TELEPORT, VERSATILE } from './keywords';
import { META } from './meta';

export const ANGEL: IHero = {
  id: 'c59a1304-8773-4331-98d1-7f998ec441cb',
  name: 'Angel',
  team: X_MEN,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const BISHOP: IHero = {
  id: '257429fe-eeb8-47c2-8116-804d3f80f910',
  name: 'Bishop',
  team: X_MEN,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const BLADE: IHero = {
  id: 'bf290d27-d4cd-4a55-8a3f-5a9203acb503',
  name: 'Blade',
  team: MARVEL_KNIGHTS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const CABLE: IHero = {
  id: '1fbd8ab1-5fb3-4045-864b-fbe0b86c74cb',
  name: 'Cable',
  team: X_FORCE,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [TELEPORT],
};

export const COLUSSUS: IHero = {
  id: '7364f3ce-9398-43b7-aff4-1ade7bc3cbd9',
  name: 'Colussus',
  team: X_FORCE,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const DAREDEVIL: IHero = {
  id: '6502b801-280a-4350-b466-9d552550d71f',
  name: 'Daredevil',
  team: MARVEL_KNIGHTS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const DOMINO: IHero = {
  id: '232dd6e7-eb09-4688-8a90-22fb91e4cef4',
  name: 'Domino',
  team: X_FORCE,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [VERSATILE],
};

export const ELEKTRA: IHero = {
  id: 'd01eb0c8-fa13-40d9-9f75-1065a8a95dfb',
  name: 'Elektra',
  team: MARVEL_KNIGHTS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const FORGE: IHero = {
  id: '806030de-7558-4d76-8094-e03251307026',
  name: 'Forge',
  team: X_FORCE,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [VERSATILE],
};

export const GHOST_RIDER: IHero = {
  id: 'aec4fb69-2332-4781-9f23-d09e60ba20c1',
  name: 'Ghost Rider',
  team: MARVEL_KNIGHTS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const ICEMAN: IHero = {
  id: '21d41d9c-8159-48ea-a510-dd1f8ca16fb5',
  name: 'Iceman',
  team: X_MEN,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const IRON_FIST: IHero = {
  id: '911a366b-c412-428c-bdad-349841b5f5d6',
  name: 'Iron Fist',
  team: MARVEL_KNIGHTS,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [VERSATILE],
};

export const JEAN_GREY: IHero = {
  id: 'ad984457-52be-4428-8fab-c6494f7d3b15',
  name: 'Jean Grey',
  team: X_MEN,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const NIGHTCRAWLER: IHero = {
  id: '5a35f66b-f8fa-4b60-baa6-f77b4ee07821',
  name: 'Nightcrawler',
  team: X_MEN,
  gameSetId: META.id,
  cardType: CardType.HERO,
  keywords: [TELEPORT],
};

export const PROFESSOR_X: IHero = {
  id: '245a62a4-0ec4-4fe3-baf4-5b7573a522e7',
  name: 'Professor X',
  team: X_MEN,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const PUNISHER: IHero = {
  id: 'a022b9a7-84fd-404d-98a2-8943efcd9e64',
  name: 'Punisher',
  team: MARVEL_KNIGHTS,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

export const WOLVERINE: IHero = {
  id: '9a398126-256d-45cc-890d-516c7f033b2f',
  name: 'Wolverine',
  team: X_FORCE,
  gameSetId: META.id,
  cardType: CardType.HERO,
};

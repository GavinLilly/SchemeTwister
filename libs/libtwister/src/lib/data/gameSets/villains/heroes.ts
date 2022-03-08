import { IHero , CardType } from '../../../model';
import {
  CRIME_SYNDICATE,
  SINISTER_SIX,
  FOES_OF_ASGARD,
  BROTHERHOOD,
} from '../../teams';

import { DODGE } from './keywords';
import { META } from './meta';

export const BULLSEYE: IHero = {
  id: '1ce739ed-89de-423e-991e-83cc6b110d30',
  name: 'Bullseye',
  team: CRIME_SYNDICATE,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const DR_OCTOPUS: IHero = {
  id: 'be30f05c-a614-41a0-b6e4-1dd0aa08639d',
  name: 'Dr. Octopus',
  team: SINISTER_SIX,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const ELECTRO: IHero = {
  id: '17fbbf08-a5b7-41ae-b753-2aa6be295558',
  name: 'Electro',
  team: SINISTER_SIX,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const ENCHANTRESS: IHero = {
  id: 'ab117a47-1dc5-4e59-bdeb-51db333f99ec',
  name: 'Enchantress',
  team: FOES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const GREEN_GOBLIN: IHero = {
  id: 'c5681d2e-e10f-4b08-9840-eb168816d4c9',
  name: 'Green Goblin',
  team: SINISTER_SIX,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const JUGGERNAUT: IHero = {
  id: 'c85ff16b-9093-4a40-8a1d-31b35b59af41',
  name: 'Juggernaut',
  team: BROTHERHOOD,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const KINGPIN: IHero = {
  id: '0eed268a-c0a2-4c41-886d-e2a35612ff3a',
  name: 'Kingpin',
  team: CRIME_SYNDICATE,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const KRAVEN: IHero = {
  id: '9561fb00-d447-482f-8ddf-cf970073ffbf',
  name: 'Kraven',
  team: SINISTER_SIX,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const LOKI: IHero = {
  id: '7c8d3a3c-86f9-4df8-af51-895d7c57c43c',
  name: 'Loki',
  team: FOES_OF_ASGARD,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const MAGNETO: IHero = {
  id: '54edf50f-adae-41ee-9766-28169d1417e8',
  name: 'Magneto',
  team: BROTHERHOOD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const MYSTERIO: IHero = {
  id: 'ddec9596-d973-4c83-aa73-11ce3adc149a',
  name: 'Mysterio',
  team: SINISTER_SIX,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const MYSTIQUE: IHero = {
  id: '5474ffe9-fa4f-415a-b9c8-950c887992d4',
  name: 'Mystique',
  team: BROTHERHOOD,
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const SABRETOOTH: IHero = {
  id: '9fd1bdda-2087-47e0-be2a-f37333d21844',
  name: 'Sabretooth',
  team: BROTHERHOOD,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

export const ULTRON: IHero = {
  id: 'dd242d89-782f-4635-979a-75e5caeb976e',
  name: 'Ultron',
  cardType: CardType.HERO,
  gameSetId: META.id,
  keywords: [DODGE],
};

export const VENOM: IHero = {
  id: 'ab7a864a-4c6a-4409-b5fd-ec0b472a57f4',
  name: 'Venom',
  team: SINISTER_SIX,
  cardType: CardType.HERO,
  gameSetId: META.id,
};

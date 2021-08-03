import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Villains as VillainsKeywords } from '../keywords';
import { Teams } from '../teams';

import { IHero } from './hero.interface';

type HeroNames =
  | 'BULLSEYE'
  | 'DR_OCTOPUS'
  | 'ELECTRO'
  | 'ENCHANTRESS'
  | 'GREEN_GOBLIN'
  | 'JUGGERNAUT'
  | 'KINGPIN'
  | 'KRAVEN'
  | 'LOKI'
  | 'MAGNETO'
  | 'MYSTERIO'
  | 'MYSTIQUE'
  | 'SABRETOOTH'
  | 'ULTRON'
  | 'VENOM';

export const Villains: Record<HeroNames, IHero> = {
  BULLSEYE: {
    id: '1ce739ed-89de-423e-991e-83cc6b110d30',
    name: 'Bullseye',
    team: Teams.CRIME_SYNDICATE,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  DR_OCTOPUS: {
    id: 'be30f05c-a614-41a0-b6e4-1dd0aa08639d',
    name: 'Dr. Octopus',
    team: Teams.SINISTER_SIX,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
  ELECTRO: {
    id: '17fbbf08-a5b7-41ae-b753-2aa6be295558',
    name: 'Electro',
    team: Teams.SINISTER_SIX,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  ENCHANTRESS: {
    id: 'ab117a47-1dc5-4e59-bdeb-51db333f99ec',
    name: 'Enchantress',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
  GREEN_GOBLIN: {
    id: 'c5681d2e-e10f-4b08-9840-eb168816d4c9',
    name: 'Green Goblin',
    team: Teams.SINISTER_SIX,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  JUGGERNAUT: {
    id: 'c85ff16b-9093-4a40-8a1d-31b35b59af41',
    name: 'Juggernaut',
    team: Teams.BROTHERHOOD,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
  KINGPIN: {
    id: '0eed268a-c0a2-4c41-886d-e2a35612ff3a',
    name: 'Kingpin',
    team: Teams.CRIME_SYNDICATE,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
  KRAVEN: {
    id: '9561fb00-d447-482f-8ddf-cf970073ffbf',
    name: 'Kraven',
    team: Teams.SINISTER_SIX,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  LOKI: {
    id: '7c8d3a3c-86f9-4df8-af51-895d7c57c43c',
    name: 'Loki',
    team: Teams.FOES_OF_ASGARD,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
  MAGNETO: {
    id: '54edf50f-adae-41ee-9766-28169d1417e8',
    name: 'Magneto',
    team: Teams.BROTHERHOOD,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  MYSTERIO: {
    id: 'ddec9596-d973-4c83-aa73-11ce3adc149a',
    name: 'Mysterio',
    team: Teams.SINISTER_SIX,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  MYSTIQUE: {
    id: '5474ffe9-fa4f-415a-b9c8-950c887992d4',
    name: 'Mystique',
    team: Teams.BROTHERHOOD,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  SABRETOOTH: {
    id: '9fd1bdda-2087-47e0-be2a-f37333d21844',
    name: 'Sabretooth',
    team: Teams.BROTHERHOOD,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
  ULTRON: {
    id: 'dd242d89-782f-4635-979a-75e5caeb976e',
    name: 'Ultron',
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Dodge],
  },
  VENOM: {
    id: 'ab7a864a-4c6a-4409-b5fd-ec0b472a57f4',
    name: 'Venom',
    team: Teams.SINISTER_SIX,
    cardType: CardType.HERO,
    gameSet: GameSets.VILLAINS,
  },
};

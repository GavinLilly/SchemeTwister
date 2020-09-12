import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'AURORA_NORTHSTAR'
  | 'BANSHEE'
  | 'BEAST'
  | 'CANNONBALL'
  | 'COLUSSUS_WOLVERINE'
  | 'DAZZLER'
  | 'HAVOK'
  | 'JUBILEE'
  | 'KITTY_PRYDE'
  | 'LEGION'
  | 'LONGSHOT'
  | 'PHOENIX'
  | 'POLARIS'
  | 'PSYLOCKE'
  | 'X_23';

export const X_Men: Record<HeroNames, IHero> = {
  AURORA_NORTHSTAR: {
    id: 'de49773c-6fef-46a9-b5e7-cce7ff87ebc0',
    name: 'Aurora & Northstar',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  BANSHEE: {
    id: 'a3ff4e01-6c49-46bf-bd12-01180a4f37bb',
    name: 'Banshee',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  BEAST: {
    id: 'de15bf03-e774-4df5-8f4b-590117b258f3',
    name: 'Beast',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  CANNONBALL: {
    id: 'e75d448c-08d8-4c44-ab56-971bab511ecf',
    name: 'Cannonball',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  COLUSSUS_WOLVERINE: {
    id: '6b1c7ecb-88ef-4321-a8c3-9e658d034079',
    name: 'Colussus & Wolverine',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  DAZZLER: {
    id: 'ae9b6454-defa-4d25-8e3e-787e3e088cc2',
    name: 'Dazzler',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  HAVOK: {
    id: 'ee9beeae-f97b-4178-83fc-ab52e3c11291',
    name: 'Havok',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  JUBILEE: {
    id: 'dc778eae-1a9c-4f68-a75f-f3b01bcef869',
    name: 'Jubilee',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  KITTY_PRYDE: {
    id: '76a70e7c-e20a-4e7d-b713-0bacad1d2ccc',
    name: 'Kitty Pryde',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  LEGION: {
    id: '30c020d5-082c-4ede-9fca-6bbf4d4a2f41',
    name: 'Legion',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  LONGSHOT: {
    id: '7c472f3c-eb7d-4bc0-8bc1-8fb596617e82',
    name: 'Longshot',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  PHOENIX: {
    id: '8c06ea1a-391f-40e5-b040-bb1912e205d4',
    name: 'Phoenix',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  POLARIS: {
    id: '317a8234-96b3-452f-b4fb-d51f9acacca0',
    name: 'Polaris',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  PSYLOCKE: {
    id: 'c46f0fb2-d638-43d8-a879-fcc8f7cb25f0',
    name: 'Psylocke',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
  X_23: {
    id: '9738e700-1f02-48e0-9b9b-17bce60c13fb',
    name: 'X-23',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.HERO,
  },
};

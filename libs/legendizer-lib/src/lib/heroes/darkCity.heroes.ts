import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Teams } from '../teams';
import { IHero } from './hero.interface';

type HeroNames =
  | 'ANGEL'
  | 'BISHOP'
  | 'BLADE'
  | 'CABLE'
  | 'COLUSSUS'
  | 'DAREDEVIL'
  | 'DOMINO'
  | 'ELEKTRA'
  | 'FORGE'
  | 'GHOST_RIDER'
  | 'ICEMAN'
  | 'IRON_FIST'
  | 'JEAN_GREY'
  | 'NIGHTCRAWLER'
  | 'PROFESSOR_X'
  | 'PUNISHER'
  | 'WOLVERINE';

export const DarkCity: Record<HeroNames, IHero> = {
  ANGEL: {
    id: 'c59a1304-8773-4331-98d1-7f998ec441cb',
    name: 'Angel',
    team: Teams.X_MEN,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  BISHOP: {
    id: '257429fe-eeb8-47c2-8116-804d3f80f910',
    name: 'Bishop',
    team: Teams.X_MEN,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  BLADE: {
    id: 'bf290d27-d4cd-4a55-8a3f-5a9203acb503',
    name: 'Blade',
    team: Teams.MARVEL_KNIGHTS,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  CABLE: {
    id: '1fbd8ab1-5fb3-4045-864b-fbe0b86c74cb',
    name: 'Cable',
    team: Teams.X_FORCE,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  COLUSSUS: {
    id: '7364f3ce-9398-43b7-aff4-1ade7bc3cbd9',
    name: 'Colussus',
    team: Teams.X_FORCE,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  DAREDEVIL: {
    id: '6502b801-280a-4350-b466-9d552550d71f',
    name: 'Daredevil',
    team: Teams.MARVEL_KNIGHTS,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  DOMINO: {
    id: '232dd6e7-eb09-4688-8a90-22fb91e4cef4',
    name: 'Domino',
    team: Teams.X_FORCE,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  ELEKTRA: {
    id: 'd01eb0c8-fa13-40d9-9f75-1065a8a95dfb',
    name: 'Elektra',
    team: Teams.MARVEL_KNIGHTS,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  FORGE: {
    id: '806030de-7558-4d76-8094-e03251307026',
    name: 'Forge',
    team: Teams.X_FORCE,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  GHOST_RIDER: {
    id: 'aec4fb69-2332-4781-9f23-d09e60ba20c1',
    name: 'Ghost Rider',
    team: Teams.MARVEL_KNIGHTS,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  ICEMAN: {
    id: '21d41d9c-8159-48ea-a510-dd1f8ca16fb5',
    name: 'Iceman',
    team: Teams.X_MEN,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  IRON_FIST: {
    id: '911a366b-c412-428c-bdad-349841b5f5d6',
    name: 'Iron Fist',
    team: Teams.MARVEL_KNIGHTS,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  JEAN_GREY: {
    id: 'ad984457-52be-4428-8fab-c6494f7d3b15',
    name: 'Jean Grey',
    team: Teams.X_MEN,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  NIGHTCRAWLER: {
    id: '5a35f66b-f8fa-4b60-baa6-f77b4ee07821',
    name: 'Nightcrawler',
    team: Teams.X_MEN,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  PROFESSOR_X: {
    id: '245a62a4-0ec4-4fe3-baf4-5b7573a522e7',
    name: 'Professor X',
    team: Teams.X_MEN,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  PUNISHER: {
    id: 'a022b9a7-84fd-404d-98a2-8943efcd9e64',
    name: 'Punisher',
    team: Teams.MARVEL_KNIGHTS,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
  WOLVERINE: {
    id: '9a398126-256d-45cc-890d-516c7f033b2f',
    name: 'Wolverine',
    team: Teams.X_FORCE,
    gameSet: GameSets.DARK_CITY,
    cardType: CardType.HERO,
  },
};

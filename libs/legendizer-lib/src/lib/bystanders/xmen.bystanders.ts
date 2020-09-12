import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IHero } from '../heroes';
import { Teams } from '../teams';

type BystanderNames =
  | 'CYPHER'
  | 'HEARTLESS_COMPUTER_SCIENTIST'
  | 'KARMA'
  | 'MAGIK'
  | 'MAGMA'
  | 'MARTIAL_ARTS_MASTER'
  | 'MIRAGE'
  | 'SUNSPOT'
  | 'WARLOCK'
  | 'WOLFSBANE';

export const X_Men: Record<BystanderNames, IHero> = {
  CYPHER: {
    id: '5d6476a3-dea9-4cc5-9b8b-6a76126fb52d',
    name: 'Cypher',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  HEARTLESS_COMPUTER_SCIENTIST: {
    id: 'f36a5f45-66d1-4841-84b1-72b66517fae5',
    name: 'Heartless Computer Scientist',
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  KARMA: {
    id: '15f0702b-cce3-4a05-949f-1f704516b2e8',
    name: 'Karma',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  MAGIK: {
    id: '5ed9e2e5-934e-4469-a890-aa57e75fd7aa',
    name: 'Magik',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  MAGMA: {
    id: 'cc9dbd5f-2c5a-4d83-9de0-0d5bd1985cb6',
    name: 'Magma',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  MARTIAL_ARTS_MASTER: {
    id: '5ec56fec-0b61-47b2-b19c-76d3098c9da0',
    name: 'Martial Arts Master',
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  MIRAGE: {
    id: '655dadcd-16ef-47a5-905a-ab20c3a1ec5a',
    name: 'Mirage',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  SUNSPOT: {
    id: 'fae9d54d-01ea-4aa7-bb4f-cc1a063c10b4',
    name: 'Sunspot',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  WARLOCK: {
    id: '272ba739-4bb9-400d-8da9-3608ff0db2db',
    name: 'Warlock',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
  WOLFSBANE: {
    id: '7d7d24cb-cf18-4d77-8749-324554f245f1',
    name: 'Wolfsbane',
    team: Teams.X_MEN,
    gameSet: GameSets.X_MEN,
    cardType: CardType.BYSTANDER
  },
};

import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { X_Men as X_MenKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'ARCADE'
  | 'EPIC_ARCADE'
  | 'DARK_PHOENIX'
  | 'EPIC_DARK_PHOENIX'
  | 'DEATHBIRD'
  | 'EPIC_DEATHBIRD'
  | 'MOJO'
  | 'EPIC_MOJO'
  | 'ONSLAUGHT'
  | 'EPIC_ONSLAUGHT'
  | 'SHADOW_KING'
  | 'EPIC_SHADOW_KING';

export const X_Men: Record<MastermindNames, IMastermind> = {
  ARCADE: {
    id: '48b50c53-78b8-4e47-86f9-20be6ffcdc72',
    name: 'Arcade',
    alwaysLeads: [VillainGroups.X_MEN.MURDERWORLD],
    attackPoints: '3*',
    victoryPoints: 5,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.HumanShields],
  },
  EPIC_ARCADE: {
    id: '23cc52ee-2d3f-448f-8d67-5b19b29b30da',
    name: 'Epic Arcade',
    alwaysLeads: [VillainGroups.X_MEN.MURDERWORLD],
    attackPoints: '4*',
    victoryPoints: 6,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.HumanShields],
  },
  DARK_PHOENIX: {
    id: 'b0f4dc4e-45fa-4cb6-8067-b13ee207ac9b',
    name: 'Dark Phoenix',
    alwaysLeads: [VillainGroups.X_MEN.HELLFIRE_CLUB],
    attackPoints: 13,
    victoryPoints: 7,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
  },
  EPIC_DARK_PHOENIX: {
    id: '252a3acd-f736-40cd-ae33-eebc6e0b459f',
    name: 'Epic Dark Phoenix',
    alwaysLeads: [VillainGroups.X_MEN.HELLFIRE_CLUB],
    attackPoints: 15,
    victoryPoints: 7,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
  },
  DEATHBIRD: {
    id: '24e6febf-7d5e-40eb-bdda-75956a53e66c',
    name: 'Deathbird',
    alwaysLeads: [
      VillainGroups.X_MEN.SHIAR_IMPERIAL_GUARD,
      [Henchmen.X_MEN.SHIAR_DEATH_COMMANDOS, Henchmen.X_MEN.SHIAR_PATROL_CRAFT][
        Math.floor(Math.random() * 2)
      ],
    ],
    attackPoints: '8+',
    victoryPoints: 6,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.TokenCards],
  },
  EPIC_DEATHBIRD: {
    id: '56cd82c2-548a-48dd-a1d6-1437dbe5bda8',
    name: 'Epic Deathbird',
    alwaysLeads: [
      VillainGroups.X_MEN.SHIAR_IMPERIAL_GUARD,
      [Henchmen.X_MEN.SHIAR_DEATH_COMMANDOS, Henchmen.X_MEN.SHIAR_PATROL_CRAFT][
        Math.floor(Math.random() * 2)
      ],
    ],
    attackPoints: '8+',
    victoryPoints: 6,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.TokenCards],
  },
  MOJO: {
    id: '35177145-ec24-4858-98ed-0159e2e412ab',
    name: 'Mojo',
    alwaysLeads: [VillainGroups.X_MEN.MOJOVERSE],
    attackPoints: '6*',
    victoryPoints: 5,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.HumanShields],
  },
  EPIC_MOJO: {
    id: '85112b60-5998-42c9-a212-1355a515f6ad',
    name: 'Epic Mojo',
    alwaysLeads: [VillainGroups.X_MEN.MOJOVERSE],
    attackPoints: '7*',
    victoryPoints: 5,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.HumanShields],
  },
  ONSLAUGHT: {
    id: 'f6b04a2e-3673-49a3-8535-a2016b8853b7',
    name: 'Onslaught',
    alwaysLeads: [VillainGroups.X_MEN.DARK_DESCENDANTS],
    attackPoints: '12+',
    victoryPoints: 7,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.Dominate],
  },
  EPIC_ONSLAUGHT: {
    id: 'fe2edc38-9c90-4711-bfc2-cfb762456558',
    name: 'Epic Onslaught',
    alwaysLeads: [VillainGroups.X_MEN.DARK_DESCENDANTS],
    attackPoints: '12+',
    victoryPoints: 7,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.Dominate],
  },
  SHADOW_KING: {
    id: 'cc6e1ee5-a074-4e95-9488-8f455836085c',
    name: 'Shadow King',
    alwaysLeads: [VillainGroups.X_MEN.SHADOW_X],
    attackPoints: '7+',
    victoryPoints: 6,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.Dominate, X_MenKeywords.Traps],
  },
  EPIC_SHADOW_KING: {
    id: '993c5dc0-e96e-4b04-a199-a73e5849e751',
    name: 'Epic Shadow King',
    alwaysLeads: [VillainGroups.X_MEN.SHADOW_X],
    attackPoints: '9+',
    victoryPoints: 6,
    gameSet: GameSets.X_MEN,
    cardType: CardType.MASTERMIND,
    keywords: [X_MenKeywords.Dominate, X_MenKeywords.Traps],
  },
};

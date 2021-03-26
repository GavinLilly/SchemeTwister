import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'BELASCO_DEMON_LORD_OF_LIMBO'
  | 'EMMA_FROST_THE_WHITE_QUEEN'
  | 'EPIC_BELASCO'
  | 'EPIC_EMMA_FROST';

export const NewMutants: Record<MastermindNames, IMastermind> = {
  BELASCO_DEMON_LORD_OF_LIMBO: {
    id: '29e222c6-7b22-49e8-bc3e-77a80ad01ac8',
    name: 'Belasco, Demon Lord of Limbo',
    alwaysLeads: [VillainGroups.NEW_MUTANTS.DEMONS_OF_LIMBO],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.NEW_MUTANTS,
  },
  EMMA_FROST_THE_WHITE_QUEEN: {
    id: '7a137e62-3cce-4003-b522-62d1c61fb289',
    name: 'Emma Frost, The White Queen',
    alwaysLeads: [VillainGroups.NEW_MUTANTS.HELLIONS],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.NEW_MUTANTS,
  },
  EPIC_BELASCO: {
    id: '5d90bb23-c3e5-47ab-a3d9-5117d959ed1f',
    name: 'Epic Belasco',
    alwaysLeads: [VillainGroups.NEW_MUTANTS.DEMONS_OF_LIMBO],
    attackPoints: '10+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.NEW_MUTANTS,
  },
  EPIC_EMMA_FROST: {
    id: '5cd1338e-70be-49e0-96b8-289b61f7b5cd',
    name: 'Epic Emma Frost',
    alwaysLeads: [VillainGroups.NEW_MUTANTS.HELLIONS],
    attackPoints: '8+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.NEW_MUTANTS,
  },
};

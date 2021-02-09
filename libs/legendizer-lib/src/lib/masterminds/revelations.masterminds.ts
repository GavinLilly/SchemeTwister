import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'GRIM_REAPER'
  | 'THE_HOOD'
  | 'MANDARIN'
  | 'EPIC_GRIM_REAPER'
  | 'EPIC_HOOD'
  | 'EPIC_MANDARIN';

export const Revelations: Record<MastermindNames, IMastermind> = {
  GRIM_REAPER: {
    id: 'b595f6d1-33ab-47c8-834a-f47a01083193',
    name: 'Grim Reaper',
    alwaysLeads: [VillainGroups.REVELATIONS.LETHAL_LEGION],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REVELATIONS,
  },
  THE_HOOD: {
    id: 'febabcdf-503e-4343-9389-3f901ebe345f',
    name: 'The Hood',
    alwaysLeads: [VillainGroups.REVELATIONS.HOODS_GANG],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REVELATIONS,
  },
  MANDARIN: {
    id: 'a6dcfa1a-14f2-4f4b-b3d1-ef2740539dab',
    name: 'Mandarin',
    alwaysLeads: [Henchmen.REVELATIONS.MANDARINS_RINGS],
    attackPoints: '16',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REVELATIONS,
  },
  EPIC_GRIM_REAPER: {
    id: 'a9da7041-a927-4030-96b7-1641be3bd7df',
    name: 'Epic Grim Reaper',
    alwaysLeads: [VillainGroups.REVELATIONS.LETHAL_LEGION],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REVELATIONS,
  },
  EPIC_HOOD: {
    id: '91622572-b2b3-48b1-9861-ba8233ad26d5',
    name: 'Epic Hood',
    alwaysLeads: [VillainGroups.REVELATIONS.HOODS_GANG],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REVELATIONS,
  },
  EPIC_MANDARIN: {
    id: '6bf519cd-ba2c-47ac-abf9-97c849b42d1e',
    name: 'Epic Mandarin',
    alwaysLeads: [Henchmen.REVELATIONS.MANDARINS_RINGS],
    attackPoints: '26',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REVELATIONS,
  },
};

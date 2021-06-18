import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'THE_BEYONDER'
  | 'THE_GRANDMASTER'
  | 'MAGUS'
  | 'EPIC_BEYONDER'
  | 'EPIC_GRANDMASTER'
  | 'EPIC_MAGUS';

export const IntoTheCosmos: Record<MastermindNames, IMastermind> = {
  THE_BEYONDER: {
    id: '8a48003e-f4f1-4bc6-bf1c-0199b878ad68',
    name: 'The Beyonder',
    alwaysLeads: [VillainGroups.INTO_THE_COSMOS.FROM_BEYOND],
    attackPoints: '21',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  THE_GRANDMASTER: {
    id: 'a94bd803-fe80-4545-9d84-8df02a870f8b',
    name: 'The Grandmaster',
    alwaysLeads: [VillainGroups.INTO_THE_COSMOS.ELDERS_OF_THE_UNIVERSE],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  MAGUS: {
    id: '286d73ed-cd99-4991-bee0-6cdf252e8061',
    name: 'Magus',
    alwaysLeads: [Henchmen.INTO_THE_COSMOS.UNIVERSAL_CHURCH_OF_TRUTH],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  EPIC_BEYONDER: {
    id: '8ebd6355-3568-4142-95e5-34069f077c63',
    name: 'Epic Beyonder',
    alwaysLeads: [VillainGroups.INTO_THE_COSMOS.FROM_BEYOND],
    attackPoints: '24',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  EPIC_GRANDMASTER: {
    id: '42324863-9864-4b9a-bf20-7ba0396618f8',
    name: 'Epic Grandmaster',
    alwaysLeads: [VillainGroups.INTO_THE_COSMOS.ELDERS_OF_THE_UNIVERSE],
    attackPoints: '11',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
  EPIC_MAGUS: {
    id: 'a61bdc52-85c1-494d-bd3e-a84920b6289c',
    name: 'Epic Magus',
    alwaysLeads: [Henchmen.INTO_THE_COSMOS.UNIVERSAL_CHURCH_OF_TRUTH],
    attackPoints: '11+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.INTO_THE_COSMOS,
  },
};

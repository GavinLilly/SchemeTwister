import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { VillainGroups } from "../villains";
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'SUPREME_INTELLIGENCE'
  | 'THANOS'

export const GuardiansOfTheGalaxy: Record<MastermindNames, IMastermind> = {
  SUPREME_INTELLIGENCE: {
    id: '4cc39f08-f904-433f-8345-abf183de331a',
    name: 'Supreme Intelligence of the Kree',
    alwaysLeads: [VillainGroups.GUARDIANS_OF_THE_GALAXY.KREE_STARFORCE],
    attackPoints: 9,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  },
  THANOS: {
    id: 'a70ec132-82aa-4a6c-bf26-f57928b3b066',
    name: 'Thanos',
    alwaysLeads: [VillainGroups.GUARDIANS_OF_THE_GALAXY.INFINITY_GEMS],
    attackPoints: 24,
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.GUARDIANS_OF_THE_GALAXY
  }
};

import { CardType, Keyword } from "../cardSet";
import { GameSets } from "../gamesets";
import { VillainGroups } from "../villains";
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'HYDRA_HIGH_COUNCIL'
  | 'HYDRA_SUPER_ADAPTOID'

export const Shield: Record<MastermindNames, IMastermind> = {
  HYDRA_HIGH_COUNCIL: {
    id: '93764f78-07cf-42ff-8458-2b4832985107',
    name: 'Hydra High Council',
    alwaysLeads: [VillainGroups.SHIELD.HYDRA_ELITE],
    attackPoints: '7-16',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SHIELD,
    keyword: Keyword.ADAPT
  },
  HYDRA_SUPER_ADAPTOID: {
    id: 'ae671cab-2112-47e9-8349-1704dc4052d7',
    name: 'Hydra Super-Adaptoid',
    alwaysLeads: [VillainGroups.SHIELD.AIM_HYDRA_OFFSHOOT],
    attackPoints: '8-14',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SHIELD,
    keyword: Keyword.ADAPT
  }
};

import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'HYBRID'
  | 'POISON_THANOS'
  | 'EPIC_HYBRID'
  | 'EPIC_POISON_THANOS';

export const Venom: Record<MastermindNames, IMastermind> = {
  HYBRID: {
    id: 'a2fcb3d5-4ae2-44e7-bc7f-63193faf5446',
    name: 'Hybrid',
    alwaysLeads: [VillainGroups.VENOM.LIFE_FOUNDATION],
    attackPoints: '6',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VENOM,
  },
  POISON_THANOS: {
    id: 'be91be31-f5d5-40cf-aa46-21f393bf1659',
    name: 'Poison Thanos',
    alwaysLeads: [VillainGroups.VENOM.POISONS],
    attackPoints: '12',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VENOM,
  },
  EPIC_HYBRID: {
    id: '2fbed495-883d-4962-928e-d78677add612',
    name: 'Epic Hybrid',
    alwaysLeads: [VillainGroups.VENOM.LIFE_FOUNDATION],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VENOM,
  },
  EPIC_POISON_THANOS: {
    id: 'e591b841-9663-4f31-bd59-c79b23688b3f',
    name: 'Epic Poison Thanos',
    alwaysLeads: [VillainGroups.VENOM.POISONS],
    attackPoints: '13',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VENOM,
  },
};

import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames = 'URUENCHANTED_IRON_MAN';

export const FearItself: Record<MastermindNames, IMastermind> = {
  URUENCHANTED_IRON_MAN: {
    id: 'ae06a222-8894-458e-9ef3-f75b823d4d2b',
    name: 'Uru-Enchanted Iron Man',
    alwaysLeads: [VillainGroups.FEAR_ITSELF.THE_MIGHTY],
    attackPoints: '7',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.FEAR_ITSELF,
  },
};

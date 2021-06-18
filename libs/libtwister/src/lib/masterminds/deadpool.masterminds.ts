import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames = 'EVIL_DEADPOOL' | 'MACHO_GOMEZ';

export const Deadpool: Record<MastermindNames, IMastermind> = {
  EVIL_DEADPOOL: {
    id: 'e9427fd1-f815-4a04-8ca9-822ae4152a9b',
    name: 'Evil Deadpool',
    alwaysLeads: [VillainGroups.DEADPOOL.EVIL_DEADPOOL_CORPSE],
    attackPoints: '11',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.DEADPOOL,
  },
  MACHO_GOMEZ: {
    id: 'ad9cbeab-e0f5-4c1a-b93d-160f9c4932d0',
    name: 'Macho Gomez',
    alwaysLeads: [VillainGroups.DEADPOOL.DEADPOOLS_FRIENDS],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.DEADPOOL,
  },
};

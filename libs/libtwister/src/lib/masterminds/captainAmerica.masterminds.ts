import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames = 'ARNIM_ZOLA' | 'BARON_HEINRICH_ZEMO';

export const CaptainAmerica: Record<MastermindNames, IMastermind> = {
  ARNIM_ZOLA: {
    id: '7351cae6-f1d4-4c31-a075-fa7a25a4a13e',
    name: 'Arnim Zola',
    alwaysLeads: [VillainGroups.CAPTAIN_AMERICA.ZOLAS_CREATIONS],
    attackPoints: '6',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CAPTAIN_AMERICA,
  },
  BARON_HEINRICH_ZEMO: {
    id: '008db486-dbf4-47d9-b61e-19fe11adb5d1',
    name: 'Baron Heinrich Zemo',
    alwaysLeads: [VillainGroups.CAPTAIN_AMERICA.MASTERS_OF_EVIL_WWII],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CAPTAIN_AMERICA,
  },
};

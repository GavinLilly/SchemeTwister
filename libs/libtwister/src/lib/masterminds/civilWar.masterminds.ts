import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'AUTHORITARIAN_IRON_MAN'
  | 'BARON_HELMUT_ZEMO'
  | 'MARIA_HILL_DIRECTOR_OF_SHIELD'
  | 'MISTY_KNIGHT'
  | 'RAGNAROK';

export const CivilWar: Record<MastermindNames, IMastermind> = {
  AUTHORITARIAN_IRON_MAN: {
    id: 'e9052952-4b86-4718-b33f-2b926d32b833',
    name: 'Authoritarian Iron Man',
    alwaysLeads: [VillainGroups.CIVIL_WAR.SUPERHUMAN_REGISTRATION_ACT],
    attackPoints: '12',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CIVIL_WAR,
  },
  BARON_HELMUT_ZEMO: {
    id: 'ebd930e5-f065-414d-9862-01d335f30e3e',
    name: 'Baron Helmut Zemo',
    alwaysLeads: [VillainGroups.CIVIL_WAR.THUNDERBOLTS],
    attackPoints: '16',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CIVIL_WAR,
  },
  MARIA_HILL_DIRECTOR_OF_SHIELD: {
    id: '07e76e37-70ce-40d6-a98c-9df5d2314e6a',
    name: 'Maria Hill, Director of S.H.I.E.L.D.',
    alwaysLeads: [VillainGroups.CIVIL_WAR.SHIELD_ELITE],
    attackPoints: '7',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CIVIL_WAR,
  },
  MISTY_KNIGHT: {
    id: '28b6b19a-8d4f-490d-b834-dd03b3ab45aa',
    name: 'Misty Knight',
    alwaysLeads: [VillainGroups.CIVIL_WAR.HEROES_FOR_HIRE],
    attackPoints: '14',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CIVIL_WAR,
  },
  RAGNAROK: {
    id: '9492f5bc-f54a-4304-b158-0a7df6fc2127',
    name: 'Ragnarok',
    alwaysLeads: [VillainGroups.CIVIL_WAR.REGISTRATION_ENFORCERS],
    attackPoints: '6',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CIVIL_WAR,
  },
};

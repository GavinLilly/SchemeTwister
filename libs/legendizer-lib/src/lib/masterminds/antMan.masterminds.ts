import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { VillainGroups } from "../villains";
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'ULTRON'
  | 'EPIC_ULTRON'
  | 'MORGAN_LE_FAY'
  | 'EPIC_MORGAN_LE_FAY'

export const AntMan: Record<MastermindNames, IMastermind> = {
  ULTRON: {
    id: '90f9437a-04b6-4efb-85af-829896a83ac8',
    name: 'Ultron',
    alwaysLeads: [VillainGroups.ANT_MAN.ULTRONS_LEGACY],
    attackPoints: 9,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANT_MAN
  },
  EPIC_ULTRON: {
    id: '89167683-86c8-497b-95af-17838c3d7021',
    name: 'Epic Ultron',
    alwaysLeads: [VillainGroups.ANT_MAN.ULTRONS_LEGACY],
    attackPoints: 10,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANT_MAN
  },
  MORGAN_LE_FAY: {
    id: 'eadae97c-473e-46db-bf18-ac871d378031',
    name: 'Morgan Le Fay',
    alwaysLeads: [VillainGroups.ANT_MAN.QUEENS_VENGEANCE],
    attackPoints: 7,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANT_MAN
  },
  EPIC_MORGAN_LE_FAY: {
    id: 'b2adb1bc-d44f-4fdb-8860-67c4f539f825',
    name: 'Epic Morgan Le Fay',
    alwaysLeads: [VillainGroups.ANT_MAN.QUEENS_VENGEANCE],
    attackPoints: 9,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.ANT_MAN
  }
};

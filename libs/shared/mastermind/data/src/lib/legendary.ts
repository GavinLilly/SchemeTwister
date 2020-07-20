import { IMastermind } from "@legendizer/shared/mastermind/types";
import { GameSets } from "@legendizer/shared/gameSet/data";
import { LegendaryHenchmen } from "@legendizer/shared/henchmen/data";
import { LegendaryVillainGroups } from "@legendizer/shared/villainGroup/data";
import { CardType } from '@legendizer/shared/base/types';

type MastermindNames = 'DR_DOOM' | 'LOKI' | 'MAGNETO' | 'RED_SKULL'

export const LegendaryMasterminds: Record<MastermindNames, IMastermind> = {
  DR_DOOM: {
    id: '0bf45de9-7ee0-4650-98e0-2ef0300c6e22',
    name: 'Dr. Doom',
    alwaysLeads: LegendaryHenchmen.DOOMBOT_LEGION,
    attackPoints: 9,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND
  },
  LOKI: {
    id: '2d54ba0e-d2f8-40ba-a685-0853ce7201ea',
    name: 'Loki',
    alwaysLeads: LegendaryVillainGroups.ENEMIES_OF_ASGARD,
    attackPoints: 10,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND
  },
  MAGNETO: {
    id: 'ddf93b06-2e71-4a4b-99bf-02dd54f0d0c2',
    name: 'Magneto',
    alwaysLeads: LegendaryVillainGroups.BROTHERHOOD,
    attackPoints: 8,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND
  },
  RED_SKULL: {
    id: '9ed63c18-275f-4cfe-977e-c49efc391b9e',
    name: 'Red Skull',
    alwaysLeads: LegendaryVillainGroups.HYDRA,
    attackPoints: 7,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND
  }
}

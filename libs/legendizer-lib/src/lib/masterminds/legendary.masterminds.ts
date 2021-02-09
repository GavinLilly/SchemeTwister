import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames = 'DR_DOOM' | 'LOKI' | 'MAGNETO' | 'RED_SKULL';

export const Legendary: Record<MastermindNames, IMastermind> = {
  DR_DOOM: {
    id: '0bf45de9-7ee0-4650-98e0-2ef0300c6e22',
    name: 'Dr. Doom',
    alwaysLeads: [Henchmen.LEGENDARY.DOOMBOT_LEGION],
    attackPoints: 9,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND,
  },
  LOKI: {
    id: '2d54ba0e-d2f8-40ba-a685-0853ce7201ea',
    name: 'Loki',
    alwaysLeads: [VillainGroups.LEGENDARY.ENEMIES_OF_ASGARD],
    attackPoints: 10,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND,
  },
  MAGNETO: {
    id: 'ddf93b06-2e71-4a4b-99bf-02dd54f0d0c2',
    name: 'Magneto',
    alwaysLeads: [VillainGroups.LEGENDARY.BROTHERHOOD],
    attackPoints: 8,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND,
  },
  RED_SKULL: {
    id: '9ed63c18-275f-4cfe-977e-c49efc391b9e',
    name: 'Red Skull',
    alwaysLeads: [VillainGroups.LEGENDARY.HYDRA],
    attackPoints: 7,
    victoryPoints: 5,
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.MASTERMIND,
  },
};

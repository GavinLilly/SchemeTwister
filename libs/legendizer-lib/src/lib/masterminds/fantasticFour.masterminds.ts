import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { VillainGroups } from "../villains";
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'GALACTUS'
  | 'MOLE_MAN'

export const FantasticFour: Record<MastermindNames, IMastermind> = {
  GALACTUS: {
    id: '9782d689-6f55-435e-a99f-0b91cf167fe9',
    name: 'Galactus',
    alwaysLeads: [VillainGroups.FANTASTIC_FOUR.HERALDS_OF_GALACTUS],
    attackPoints: 20,
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.FANTASTIC_FOUR
  },
  MOLE_MAN: {
    id: 'd05d9daa-802c-46eb-93a9-812ea79fa203',
    name: 'Mole Man',
    alwaysLeads: [VillainGroups.FANTASTIC_FOUR.SUBTERRANEA],
    attackPoints: 7,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.FANTASTIC_FOUR
  }
};

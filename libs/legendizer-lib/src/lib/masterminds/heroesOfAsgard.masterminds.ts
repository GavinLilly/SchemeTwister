import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { VillainGroups } from "../villains";
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'MALEKITH'
  | 'EPIC_MALEKITH'
  | 'HELA'
  | 'EPIC_HELA'

export const HeroesOfAsgard: Record<MastermindNames, IMastermind> = {
  MALEKITH: {
    id: '666bc5a4-f156-4b7e-b978-917f0f9ea888',
    name: 'Malekith the Accursed',
    alwaysLeads: [VillainGroups.HEROES_OF_ASGARD.DARK_COUNCIL],
    attackPoints: 8,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  EPIC_MALEKITH: {
    id: '55ba618a-f935-4d75-ae83-5d78fa71e177',
    name: 'Epic Malekith the Accursed',
    alwaysLeads: [VillainGroups.HEROES_OF_ASGARD.DARK_COUNCIL],
    attackPoints: 10,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  HELA: {
    id: '7e0e4ad1-34b6-41a1-939c-713ac0b1cc05',
    name: 'Hela, Goddess of Death',
    alwaysLeads: [VillainGroups.HEROES_OF_ASGARD.OMENS_OF_RAGNAROK],
    attackPoints: 10,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.HEROES_OF_ASGARD
  },
  EPIC_HELA: {
    id: '91809fea-40ce-4238-ab2b-686bd76926b2',
    name: 'Epic Hela, Goddess of Death',
    alwaysLeads: [VillainGroups.HEROES_OF_ASGARD.OMENS_OF_RAGNAROK],
    attackPoints: 12,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.HEROES_OF_ASGARD
  }
};

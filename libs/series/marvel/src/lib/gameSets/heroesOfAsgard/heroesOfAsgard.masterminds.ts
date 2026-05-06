import { MastermindWithEpic } from '@schemetwister/libtwister';
import {
  ARTIFACT,
  THROWN_ARTIFACT,
  VILLAINOUS_WEAPONS,
  CONQUEROR,
} from '@schemetwister/series-marvel-common';

import { META } from './heroesOfAsgard.meta';
import { DARK_COUNCIL, OMENS_OF_RAGNAROK } from './heroesOfAsgard.villains';

export const MALEKITH = new MastermindWithEpic(
  {
    name: 'Malekith the Accursed',
    id: '666bc5a4-f156-4b7e-b978-917f0f9ea888',
    attackPoints: 8,
    masterStrike:
      'Malekith captures a Villainous Weapon from the city or from any player\'s control or discard pile. Then this Master Strike enters the city as a Villainous Weapon called "Darkspear" that gives +2 Attack. When you gain a Darkspear, it becomes a Thrown Artifact that gives +2 Attack when thrown.',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [DARK_COUNCIL],
    keywords: [ARTIFACT, THROWN_ARTIFACT, VILLAINOUS_WEAPONS],
  },
  {
    id: '55ba618a-f935-4d75-ae83-5d78fa71e177',
    attackPoints: 10,
    masterStrike:
      'Malekith captures a Villainous Weapon from the city, then captures one from any player\'s control or discard pile. Then this Master Strike enters the city as a Villainous Weapon called "Darkspear" that gives +3 Attack. When you gain a Darkspear, it becomes a Thrown Artifact that gives +2 Attack when thrown.',
  }
);

export const HELA = new MastermindWithEpic(
  {
    name: 'Hela, Goddess of Death',
    id: '7e0e4ad1-34b6-41a1-939c-713ac0b1cc05',
    attackPoints: 10,
    masterStrike:
      'This Strike enters the city as a 5 Attack "Army of the Dead" Villain worth 3VP. Then choose a Villain worth 3VP or more from your Victory Pile (including an Army of the Dead) to enter the city. If you didn\'t have any, each player gains a Wound.',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [OMENS_OF_RAGNAROK],
    keywords: [ARTIFACT, THROWN_ARTIFACT, CONQUEROR, VILLAINOUS_WEAPONS],
  },
  {
    id: '91809fea-40ce-4238-ab2b-686bd76926b2',
    attackPoints: 12,
    masterStrike:
      'This Strike enters the city as a 6 Attack "Army of the Dead" Villain worth 4VP. Then choose a Villain worth 4VP or more from your Victory Pile (including an Army of the Dead) to enter the city. If you didn\'t have any, each player gains a Wound.',
  }
);

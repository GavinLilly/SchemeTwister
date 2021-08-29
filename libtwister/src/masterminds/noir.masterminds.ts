import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Noir as NoirKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'CHARLES_XAVIER_PROFESSOR_OF_CRIME'
  | 'THE_GOBLIN_UNDERWORLD_BOSS';

export const Noir: Record<MastermindNames, IMastermind> = {
  CHARLES_XAVIER_PROFESSOR_OF_CRIME: {
    id: 'c31d1352-17f4-4389-82ca-d94c70409966',
    name: 'Charles Xavier, Professor of Crime',
    alwaysLeads: [VillainGroups.NOIR.XMEN_NOIR],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.NOIR,
    keywords: [NoirKeywords.Investigate, NoirKeywords.HiddenWitness],
  },
  THE_GOBLIN_UNDERWORLD_BOSS: {
    id: 'ae4c557a-4523-4eb7-906b-4635e567b10c',
    name: 'The Goblin, Underworld Boss',
    alwaysLeads: [VillainGroups.NOIR.GOBLINS_FREAK_SHOW],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.NOIR,
    keywords: [NoirKeywords.Investigate, NoirKeywords.HiddenWitness],
  },
};

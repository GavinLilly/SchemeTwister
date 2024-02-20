import { MastermindWithEpic } from '../../../model';

import {
  MOONLIGHT_AND_SUNLIGHT,
  WAKING_NIGHTMARE,
} from './theNewMutants.keywords';
import { META } from './theNewMutants.meta';
import { DEMONS_OF_LIMBO, HELLIONS } from './theNewMutants.villains';

export const BELASCO_DEMON_LORD_OF_LIMBO = new MastermindWithEpic(
  {
    id: '29e222c6-7b22-49e8-bc3e-77a80ad01ac8',
    name: 'Belasco, Demon Lord of Limbo',
    attackPoints: 9,
    masterStrike:
      'Sunlight: Each player KOs a non-grey Hero from their discard pile. Moonlight: Each player has a Waking Nightmare. KO Heroes discarded this way.',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [DEMONS_OF_LIMBO],
    keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
    specialRules:
      'Belasco gets +Attack equal to the number of non-grey Heroes in the KO pile, divided by the number of players (round down).',
  },
  {
    id: '5d90bb23-c3e5-47ab-a3d9-5117d959ed1f',
    name: 'Epic Belasco',
    attackPoints: '10+',
    masterStrike:
      'Sunlight: Each player KOs two non-grey Heroes from their discard pile. Moonlight: Each player has two Waking Nightmares. KO Heroes discarded this way.',
  }
);

export const EMMA_FROST_THE_WHITE_QUEEN = new MastermindWithEpic(
  {
    id: '7a137e62-3cce-4003-b522-62d1c61fb289',
    name: 'Emma Frost, The White Queen',
    attackPoints: 8,
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [HELLIONS],
    keywords: [WAKING_NIGHTMARE],
    specialRules:
      'During your turn, Emma Frost gets +1 Attack for each grey Hero you have.',
    masterStrike:
      'Stack this Strike next to Emma Frost. Then each player has a Waking Nightmare for each Strike stacked here.',
  },
  {
    id: '5cd1338e-70be-49e0-96b8-289b61f7b5cd',
    name: 'Epic Emma Frost',
    attackPoints: '8+',
    specialRules:
      'During your turn, Emma Frost gets +2 Attack for each grey Hero you have.',
    masterStrike:
      'Stack this Strike next to Emma Frost. Then each player has a Waking Nightmare for each Strike stacked here, then one more Waking Nightmare.',
  }
);

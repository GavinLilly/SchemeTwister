import { IMastermind, Mastermind } from '../../../model';

import { MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE } from './keywords';
import { META } from './meta';
import { DEMONS_OF_LIMBO, HELLIONS } from './villains';

type MastermindCommons = Pick<
  IMastermind,
  'gameSet' | 'victoryPoints' | 'alwaysLeads' | 'keywords'
>;

const belascoCommons: MastermindCommons = {
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [DEMONS_OF_LIMBO],
  keywords: [MOONLIGHT_AND_SUNLIGHT, WAKING_NIGHTMARE],
};

export const BELASCO_DEMON_LORD_OF_LIMBO = new Mastermind({
  id: '29e222c6-7b22-49e8-bc3e-77a80ad01ac8',
  name: 'Belasco, Demon Lord of Limbo',
  attackPoints: 9,
  ...belascoCommons,
});

export const EPIC_BELASCO = new Mastermind({
  id: '5d90bb23-c3e5-47ab-a3d9-5117d959ed1f',
  name: 'Epic Belasco',
  attackPoints: '10+',
  ...belascoCommons,
});

const emmaFrostCommons: MastermindCommons = {
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [HELLIONS],
  keywords: [WAKING_NIGHTMARE],
};

export const EMMA_FROST_THE_WHITE_QUEEN = new Mastermind({
  id: '7a137e62-3cce-4003-b522-62d1c61fb289',
  name: 'Emma Frost, The White Queen',
  attackPoints: 8,
  ...emmaFrostCommons,
});

export const EPIC_EMMA_FROST = new Mastermind({
  id: '5cd1338e-70be-49e0-96b8-289b61f7b5cd',
  name: 'Epic Emma Frost',
  attackPoints: '8+',
  ...emmaFrostCommons,
});

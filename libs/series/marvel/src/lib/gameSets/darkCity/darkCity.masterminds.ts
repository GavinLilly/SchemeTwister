import { Mastermind, HeroClass } from '@schemetwister/libtwister';

import { BRIBE } from './darkCity.keywords';
import { META } from './darkCity.meta';
import {
  FOUR_HORSEMEN,
  MARAUDERS,
  MLF,
  STREETS_OF_NEW_YORK,
  UNDERWORLD,
} from './darkCity.villains';

export const APOCALYPSE = new Mastermind({
  id: 'ec0617db-3869-4301-b07d-938876684790',
  gameSet: META,
  name: 'Apocalypse',
  attackPoints: 12,
  victoryPoints: 6,
  alwaysLeads: [FOUR_HORSEMEN],
  mastermindWins: 'When Famine, Pestilence, War, and Death have escaped',
  masterStrike:
    'Each player reveals their hand and puts all their Heroes that cost 1 or more on top of their deck.',
});

export const KINGPIN = new Mastermind({
  id: 'f2f779c3-8a3e-4e34-9488-f310fa08fb34',
  name: 'Kingpin',
  gameSet: META,
  attackPoints: '13*',
  victoryPoints: 6,
  alwaysLeads: [STREETS_OF_NEW_YORK],
  keywords: [BRIBE],
  masterStrike:
    'Each player reveals a Marvel Knights Hero or discards their hand and draws 5 cards.',
});

export const MEPHISTO = new Mastermind({
  id: '1de53796-a23a-43c3-9263-d15d6fec6f0b',
  name: 'Mephisto',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [UNDERWORLD],
  masterStrike: 'Each player reveals a Marvel Knights Hero or gains a Wound.',
});

export const MR_SINISTER = new Mastermind({
  id: 'ce62da2d-6e60-4933-8972-aa96b2c23390',
  name: 'Mr. Sinister',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [MARAUDERS],
  masterStrike: `Mr. Sinister captures a Bystander. Then each player with exactly 6 cards reveals a ${HeroClass.COVERT} Hero or discards cards equal to the number of Bystanders Mr. Sinister has.`,
});

export const STRYFE = new Mastermind({
  id: '4c24e25b-f5c3-4b03-8e41-184274007862',
  name: 'Stryfe',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [MLF],
  masterStrike: `Stack this Master Strike next to Stryfe.
Stryfe gets +1 Attack for each Master Strike stacked next to him. Each player reveals an X-Force Hero or discards a card at random.`,
});

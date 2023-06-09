import { EpicMastermindBuilder, IMastermind, Mastermind } from '../../../model';

import { UNIVERSAL_CHURCH_OF_TRUTH } from './henchmen';
import { ELDERS_OF_THE_UNIVERSE, FROM_BEYOND } from './intoTheCosmos.villains';
import { CONTEST_OF_CHAMPIONS, COSMIC_THREAT, SHARDS } from './keywords';
import { META } from './meta';

type Specs = Pick<
  IMastermind,
  'victoryPoints' | 'alwaysLeads' | 'keywords' | 'gameSet'
>;

const beyonderSpecs: Specs = {
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [FROM_BEYOND],
  keywords: [CONTEST_OF_CHAMPIONS, COSMIC_THREAT],
};

export const THE_BEYONDER = new Mastermind({
  id: '8a48003e-f4f1-4bc6-bf1c-0199b878ad68',
  name: 'The Beyonder',
  attackPoints: 21,
  ...beyonderSpecs,
});

export const EPIC_BEYONDER = new Mastermind({
  id: '8ebd6355-3568-4142-95e5-34069f077c63',
  name: 'Epic Beyonder',
  attackPoints: 24,
  ...beyonderSpecs,
});

const grandmasterSpecs: Specs = {
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [ELDERS_OF_THE_UNIVERSE],
  keywords: [CONTEST_OF_CHAMPIONS, SHARDS],
};

export const THE_GRANDMASTER = new Mastermind({
  id: 'a94bd803-fe80-4545-9d84-8df02a870f8b',
  name: 'The Grandmaster',
  attackPoints: 10,
  ...grandmasterSpecs,
});

export const EPIC_GRANDMASTER = new Mastermind({
  id: '42324863-9864-4b9a-bf20-7ba0396618f8',
  name: 'Epic Grandmaster',
  attackPoints: 11,
  ...grandmasterSpecs,
});

const magus = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Magus',
  victoryPoints: 6,
  alwaysLeads: [UNIVERSAL_CHURCH_OF_TRUTH],
  keywords: [SHARDS],
});

export const MAGUS = magus.buildNormal({
  id: '286d73ed-cd99-4991-bee0-6cdf252e8061',
  attackPoints: 9,
});

export const EPIC_MAGUS = magus.buildEpic({
  id: 'a61bdc52-85c1-494d-bd3e-a84920b6289c',
  attackPoints: '11+',
});

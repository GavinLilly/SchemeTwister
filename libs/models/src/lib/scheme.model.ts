import { Type } from 'class-transformer';

import { IScheme } from '@legendizer/api-interfaces';
import { Rules } from './rules.model';

import { VillainGroup } from './villainGroup.model';
import { Base } from './base.model';

export class Scheme extends Base implements IScheme {
  // API public members
  name: string;

  twist: string;

  evilWins: string;

  setup: string;

  specialRules?: string;

  // API private members
  numWounds?: number;

  numBystandersInVillainDeck?: number;

  @Type(() => VillainGroup)
  requiredVillains?: Array<VillainGroup>;

  @Type(() => Rules)
  rules: Rules = {
    numVillains: {
      2: 2,
      3: 3,
      4: 3,
      5: 4,
    },
    numHenchmen: {
      2: 1,
      3: 1,
      4: 2,
      5: 2,
    },
    numBystanders: {
      2: 2,
      3: 8,
      4: 8,
      5: 12,
    },
    numHeroes: {
      2: 5,
      3: 5,
      4: 5,
      5: 6,
    },
    numTwists: {
      2: 8,
      3: 8,
      4: 8,
      5: 8,
    },
  };
}

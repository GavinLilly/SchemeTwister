import { Bystander } from '../cards/bystander';
import { Henchmen } from '../cards/henchmen';
import { Hero } from '../cards/hero';
import { Mastermind } from '../cards/mastermind/mastermind';
import { VillainGroup } from '../cards/villainGroup';

import { SchemeMinusRules } from './schemeMinusRules.type';

export type AllCardTypes =
  | Bystander
  | Hero
  | Henchmen
  | VillainGroup
  | Mastermind
  | SchemeMinusRules;

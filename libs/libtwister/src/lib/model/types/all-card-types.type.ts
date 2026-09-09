import { Bystander } from '../cards/bystander';
import { Henchmen } from '../cards/henchmen';
import { Hero } from '../cards/hero';
import { Mastermind } from '../cards/mastermind/mastermind';
import { VillainGroup } from '../cards/villain-group';

import { SchemeMinusRules } from './scheme-minus-rules.type';

export type AllCardTypes =
  | Bystander
  | Hero
  | Henchmen
  | VillainGroup
  | Mastermind
  | SchemeMinusRules;

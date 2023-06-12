import { Bystander, Henchmen, Hero, Mastermind, VillainGroup } from '../cards';

import { SchemeMinusRules } from './schemeMinusRules.type';

export type AllCardTypes =
  | Bystander
  | Hero
  | Henchmen
  | VillainGroup
  | Mastermind
  | SchemeMinusRules;

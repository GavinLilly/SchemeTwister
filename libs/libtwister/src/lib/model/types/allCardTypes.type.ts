import { Bystander, Henchmen, Hero, Mastermind, VillainGroup } from '../cards';

import { SchemeMinusRules } from './specialistScheme.type';

export type AllCardTypes =
  | Bystander
  | Hero
  | Henchmen
  | VillainGroup
  | Mastermind
  | SchemeMinusRules;

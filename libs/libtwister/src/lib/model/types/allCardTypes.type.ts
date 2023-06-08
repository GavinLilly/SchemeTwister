import { Hero } from '../hero';
import { IBystander, IHenchmen, SchemeMinusRules } from '../interfaces';
import { Mastermind } from '../mastermind';
import { VillainGroup } from '../villainGroup';

export type AllCardTypes =
  | IBystander
  | Hero
  | IHenchmen
  | VillainGroup
  | Mastermind
  | SchemeMinusRules;

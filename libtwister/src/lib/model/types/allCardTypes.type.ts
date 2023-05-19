import { Hero } from '../hero';
import {
  IBystander,
  IHenchmen,
  IVillainGroup,
  SchemeMinusRules,
} from '../interfaces';
import { Mastermind } from '../mastermind';

export type AllCardTypes =
  | IBystander
  | Hero
  | IHenchmen
  | IVillainGroup
  | Mastermind
  | SchemeMinusRules;

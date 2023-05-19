import {
  IBystander,
  IHero,
  IHenchmen,
  IVillainGroup,
  SchemeMinusRules,
} from '../interfaces';
import { Mastermind } from '../mastermind';

export type AllCardTypes =
  | IBystander
  | IHero
  | IHenchmen
  | IVillainGroup
  | Mastermind
  | SchemeMinusRules;

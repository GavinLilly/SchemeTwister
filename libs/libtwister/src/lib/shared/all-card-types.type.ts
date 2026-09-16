import { Bystander } from '../bystander/bystander.model';
import { Henchmen } from '../henchmen/henchmen.model';
import { Hero } from '../hero/hero.model';
import { Mastermind } from '../mastermind/mastermind.model';
import { SchemeMinusRules } from '../scheme/scheme-minus-rules.type';
import { VillainGroup } from '../villain-group/villain-group.model';


export type AllCardTypes =
  | Bystander
  | Hero
  | Henchmen
  | VillainGroup
  | Mastermind
  | SchemeMinusRules;

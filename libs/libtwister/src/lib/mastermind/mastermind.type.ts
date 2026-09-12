import { AdaptingMastermind } from './adapting-mastermind.model';
import { MastermindWithEpic } from './mastermind-with-epic.model';
import { Mastermind } from './mastermind.model';
import { TransformingMastermind } from './transforming-mastermind.model';

export type MastermindType =
  | Mastermind
  | TransformingMastermind
  | AdaptingMastermind
  | MastermindWithEpic;

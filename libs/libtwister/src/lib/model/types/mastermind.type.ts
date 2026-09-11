import { AdaptingMastermind } from '../cards/mastermind/adapting-mastermind';
import { Mastermind } from '../cards/mastermind/mastermind';
import { MastermindWithEpic } from '../cards/mastermind/mastermind-with-epic';
import { TransformingMastermind } from '../cards/mastermind/transforming-mastermind';

export type MastermindType =
  | Mastermind
  | TransformingMastermind
  | AdaptingMastermind
  | MastermindWithEpic;

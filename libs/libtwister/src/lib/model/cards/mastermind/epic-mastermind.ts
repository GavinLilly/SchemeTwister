import { Mastermind } from './mastermind';
import { MastermindConfig } from './mastermind-config.interface';
import { MastermindWithEpic } from './mastermind-with-epic';

export class EpicMastermind extends Mastermind {
  constructor(
    config: MastermindConfig,
    public readonly reverse: MastermindWithEpic
  ) {
    super(config);
  }
}

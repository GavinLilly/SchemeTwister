import { MastermindConfig } from './mastermind-config.interface';
import { MastermindWithEpic } from './mastermind-with-epic.model';
import { Mastermind } from './mastermind.model';

export class EpicMastermind extends Mastermind {
  constructor(
    config: MastermindConfig,
    public readonly reverse: MastermindWithEpic
  ) {
    super(config);
  }
}

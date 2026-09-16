import { MastermindConfig } from './mastermind-config.interface';
import { Mastermind } from './mastermind.model';
import { MultiMastermindConfig } from './multi-mastermind-config.type';

type TransformingMastermindConfig = MultiMastermindConfig &
  Partial<Pick<MastermindConfig, 'victoryPoints'>>;

export class TransformingMastermind extends Mastermind {
  constructor(
    mastermindConfig: MastermindConfig,
    public readonly transformed: TransformingMastermindConfig
  ) {
    super(mastermindConfig);
  }
}

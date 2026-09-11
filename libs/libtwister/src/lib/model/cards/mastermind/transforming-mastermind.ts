import { Mastermind } from './mastermind';
import { MastermindConfig } from './mastermind-config.interface';
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

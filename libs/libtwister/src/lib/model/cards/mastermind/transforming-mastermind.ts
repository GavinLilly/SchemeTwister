import { IMastermind, Mastermind } from './mastermind';
import { MultiMastermindConfig } from './multi-mastermind-config.type';

type TransformingMastermindConfig = MultiMastermindConfig &
  Partial<Pick<IMastermind, 'victoryPoints'>>;

export class TransformingMastermind extends Mastermind {
  constructor(
    mastermindConfig: IMastermind,
    public readonly transformed: TransformingMastermindConfig
  ) {
    super(mastermindConfig);
  }
}

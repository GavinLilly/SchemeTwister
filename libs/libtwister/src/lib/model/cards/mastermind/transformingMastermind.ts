import { IMastermind, Mastermind } from './mastermind';
import { MultiMastermindConfig } from './multiMastermindConfig.type';

type TransformingMastermindConfig = MultiMastermindConfig &
  Partial<Pick<IMastermind, 'victoryPoints'>>;

export class TransformingMastermind extends Mastermind {
  constructor(
    mastermindConfig: IMastermind,
    private readonly _transformed: TransformingMastermindConfig
  ) {
    super(mastermindConfig);
  }

  public get transformed() {
    return this._transformed;
  }
}

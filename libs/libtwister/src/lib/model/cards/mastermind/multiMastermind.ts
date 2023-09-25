import { IMastermind, Mastermind } from './mastermind';
import { MultiMastermindConfig } from './multiMastermindConfig.type';

type MultiMastermindWithFight = MultiMastermindConfig & { fight: string };

export class MultiMastermind extends Mastermind {
  constructor(
    masterConfig: Omit<IMastermind, 'masterStrike'>,
    private readonly _mastermind1Config: MultiMastermindWithFight,
    private readonly _mastermind2Config: MultiMastermindWithFight,
    private readonly _mastermind3Config: MultiMastermindWithFight,
    private readonly _mastermind4Config: MultiMastermindWithFight
  ) {
    super({ ...masterConfig, masterStrike: '' });
  }

  public get masterminds() {
    return [
      this._mastermind1Config,
      this._mastermind2Config,
      this._mastermind3Config,
      this._mastermind4Config,
    ];
  }
}

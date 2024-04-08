import { IMastermind, Mastermind } from './mastermind';
import { MultiMastermindConfig } from './multiMastermindConfig.type';

type AdaptingMastermindWithFight = MultiMastermindConfig & { fight: string };

export class AdaptingMastermind extends Mastermind {
  constructor(
    masterConfig: Omit<IMastermind, 'masterStrike'>,
    private readonly _mastermind1Config: AdaptingMastermindWithFight,
    private readonly _mastermind2Config: AdaptingMastermindWithFight,
    private readonly _mastermind3Config: AdaptingMastermindWithFight,
    private readonly _mastermind4Config: AdaptingMastermindWithFight
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

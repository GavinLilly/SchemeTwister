import { Mastermind } from './mastermind';
import { MastermindConfig } from './mastermind-config.interface';
import { MultiMastermindConfig } from './multi-mastermind-config.type';

type AdaptingMastermindWithFight = MultiMastermindConfig & { fight: string };

export class AdaptingMastermind extends Mastermind {
  constructor(
    masterConfig: Omit<MastermindConfig, 'masterStrike'>,
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

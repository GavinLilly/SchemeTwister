import type { SetRequired } from 'type-fest';

import { EpicMastermind } from './epic-mastermind.model';
import { MastermindConfig } from './mastermind-config.interface';
import { Mastermind } from './mastermind.model';

type MastermindWithEpicConfig = SetRequired<Partial<MastermindConfig>, 'id'>;

export class MastermindWithEpic extends Mastermind {
  constructor(
    private readonly _normalMastermindConfig: MastermindConfig,
    private readonly _epicMastermindConfig: MastermindWithEpicConfig
  ) {
    super(_normalMastermindConfig);
  }

  public get epic(): EpicMastermind {
    return new EpicMastermind(
      {
        ...this._normalMastermindConfig,
        ...this._epicMastermindConfig,
        name: this._epicMastermindConfig.name ?? `Epic ${this.name}`,
      },
      this
    );
  }
}

import type { SetRequired } from 'type-fest';

import { IMastermind, Mastermind } from './mastermind';

type MastermindWithEpicConfig = SetRequired<Partial<IMastermind>, 'id'>;

export class EpicMastermind extends Mastermind {
  constructor(
    config: IMastermind,
    private readonly _reverse: MastermindWithEpic
  ) {
    super(config);
  }

  public get reverse() {
    return this._reverse;
  }
}

export class MastermindWithEpic extends Mastermind {
  constructor(
    private readonly _normalMastermindConfig: IMastermind,
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

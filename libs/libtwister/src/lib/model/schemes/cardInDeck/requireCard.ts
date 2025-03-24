import { CardStore } from '../../../factories/cardStore';
import { Random } from '../../../utils/random';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireCard<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  private readonly _availableCards: TCard[];

  constructor(required: TCard);
  constructor(firstCard: TCard, numberRequired: number);
  constructor(
    firstCard: TCard,
    numberRequired: number,
    shouldRemoveOthers: boolean,
    ...extraCards: TCard[]
  );
  constructor(
    firstCard: TCard,
    private readonly _numberRequired = 1,
    private readonly _shouldRemoveOthers = false,
    ...extraCards: TCard[]
  ) {
    this._availableCards = [firstCard];
    if (extraCards !== undefined && extraCards.length > 0) {
      this._availableCards.push(...extraCards);
    }

    if (_numberRequired > this._availableCards.length) {
      throw new Error(
        `The number of supplied cards (${this._availableCards.length}) must be more than the number required (${_numberRequired})`
      );
    }
  }

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    if (this._availableCards.length === 1) {
      return this._availableCards[0];
    }

    const random = Random.choice(this._availableCards, this._numberRequired);

    if (this._shouldRemoveOthers) {
      this._availableCards
        .filter((card) => !random.includes(card))
        .forEach((card) => store.removeCard(card));
    }

    return random;
  }
}

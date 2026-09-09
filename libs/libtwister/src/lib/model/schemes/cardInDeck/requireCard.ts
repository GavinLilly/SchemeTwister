import { CardStore } from '../../../factories/cardStore';
import { randomize } from '../../../utils/randomize';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

/**
 * A card requirer that picks the required number of cards from the provided
 * list before (possibly) removing the left overs.
 */
export class RequireCard<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  private readonly _requiredCardsOptions: TCard[];

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
    this._requiredCardsOptions = [firstCard];
    if (extraCards !== undefined && extraCards.length > 0) {
      this._requiredCardsOptions.push(...extraCards);
    }

    if (_numberRequired > this._requiredCardsOptions.length) {
      throw new Error(
        `The number of supplied cards (${this._requiredCardsOptions.length}) must be more than the number required (${_numberRequired})`
      );
    }
  }

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    if (this._requiredCardsOptions.length === 1) {
      return this._requiredCardsOptions[0];
    }

    const random = randomize(this._requiredCardsOptions, this._numberRequired);

    if (this._shouldRemoveOthers) {
      this._requiredCardsOptions
        .filter((card) => !random.includes(card))
        .forEach((card) => store.removeCard(card));
    }

    return random;
  }
}

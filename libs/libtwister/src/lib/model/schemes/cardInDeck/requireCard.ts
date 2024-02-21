import { CardStore } from '../../../factories/cardStore';
import { randomize } from '../../../utils/randomize';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireCard<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  private _availableCards: TCard[];

  constructor(required: TCard);
  constructor(
    firstCard: TCard,
    numberRequired: number,
    shouldRemoveOthers: boolean,
    ...extraCards: TCard[]
  );
  constructor(
    firstCard: TCard,
    private _numberRequired = 1,
    private _shouldRemoveOthers = false,
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

    const random = randomize(this._availableCards, this._numberRequired);

    const randomAsArray = random instanceof Array ? random : [random];

    if (this._shouldRemoveOthers) {
      this._availableCards
        .filter((card) => !randomAsArray.includes(card))
        .forEach((card) => store.removeCard(card));
    }

    return random;
  }
}

import { CardStore } from '../../../factories/cardStore';
import { randomize } from '../../../utils/randomize';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireCardName<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(cardName: string);
  constructor(
    cardName: string,
    numberRequired: number,
    shouldRemoveOthers: boolean
  );
  constructor(
    private _cardName: string,
    private _numberRequired = 1,
    private _shouldRemoveOthers = false
  ) {}

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    const matchingCards = store.availableCards.filter((card) =>
      card.name.toLowerCase().includes(this._cardName.toLowerCase())
    );

    if (matchingCards.length === 0) {
      throw new Error(
        `No card with ${this._cardName} in it's name is available to be selected.`
      );
    }

    const random = randomize(matchingCards, this._numberRequired);

    if (this._shouldRemoveOthers) {
      matchingCards
        .filter((card) => !random.includes(card))
        .forEach((card) => store.removeCard(card));
    }

    return random;
  }
}

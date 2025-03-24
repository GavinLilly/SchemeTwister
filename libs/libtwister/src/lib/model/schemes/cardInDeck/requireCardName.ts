import { CardStore } from '../../../factories/cardStore';
import { Random } from '../../../utils/random';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireCardName<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(cardName: string | string[]);
  constructor(
    cardName: string | string[],
    numberRequired: number,
    shouldRemoveOthers: boolean
  );
  constructor(
    private readonly _cardName: string | string[],
    private readonly _numberRequired = 1,
    private readonly _shouldRemoveOthers = false
  ) {}

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    const cardNames = Array.isArray(this._cardName)
      ? this._cardName
      : [this._cardName];

    const matchingCards = store.availableCards.filter((card) =>
      cardNames.some((cardName) =>
        card.name.toLowerCase().includes(cardName.toLowerCase())
      )
    );

    if (matchingCards.length === 0) {
      throw new Error(
        `No card with ${cardNames.join(
          ' or'
        )} in it's name is available to be selected.`
      );
    }

    const random = Random.choice(matchingCards, this._numberRequired);

    if (this._shouldRemoveOthers) {
      matchingCards
        .filter((card) => !random.includes(card))
        .forEach((card) => store.removeCard(card));
    }

    return random;
  }
}

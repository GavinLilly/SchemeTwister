import { CardStore } from '../../../stores/card-store';
import { randomize } from '../../../utils/randomize';
import { CardGroup } from '../../cards/card-group';
import { Keyword } from '../../interfaces/keyword.interface';

import { RequireCardBehaviour } from './require-card-behaviour.interface';

export class RequireKeyword<TCard extends CardGroup>
  implements RequireCardBehaviour<TCard>
{
  constructor(private readonly _keyword: Keyword) {}

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    const applicableCards = store.availableCards.filter((card) =>
      card.keywords.map((keyword) => keyword.name).includes(this._keyword.name)
    );

    return randomize(applicableCards);
  }
}

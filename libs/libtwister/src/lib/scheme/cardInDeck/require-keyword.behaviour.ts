import { CardGroup } from '../../shared/card-group';
import { Keyword } from '../../shared/keyword.interface';
import { randomize } from '../../shared/utils/randomize';
import { CardStore } from '../../store/card-store';
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

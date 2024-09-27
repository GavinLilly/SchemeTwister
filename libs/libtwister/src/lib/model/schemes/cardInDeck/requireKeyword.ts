import { CardStore } from '../../../factories/cardStore';
import { randomize } from '../../../utils/randomize';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import { IKeyword } from '../../interfaces';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireKeyword<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(private readonly _keyword: IKeyword) {}

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    const applicableCards = store.availableCards.filter((card) =>
      card.keywords.map((keyword) => keyword.name).includes(this._keyword.name)
    );

    return randomize(applicableCards);
  }
}

import { KeywordName } from '../../../data/enums/keywordName.enum';
import { CardStore } from '../../../factories/cardStore';
import { randomize } from '../../../utils/randomize';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireKeyword<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(private _keyword: KeywordName) {}

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    const applicableCards = store.availableCards.filter((card) =>
      card.keywords.map((keyword) => keyword.name).includes(this._keyword)
    );

    return randomize(applicableCards);
  }
}

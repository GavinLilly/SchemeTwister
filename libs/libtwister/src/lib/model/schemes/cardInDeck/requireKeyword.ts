import { KeywordName } from '../../../data';
import { CardStore } from '../../../factories';
import { randomize } from '../../../utils/randomize';
import { AbstractCardGroup } from '../../cards';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireKeyword<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(private _keyword: KeywordName) {}

  getRequiredCard(store: CardStore<TCard>): TCard | TCard[] {
    const applicableVillains = store.availableCards.filter((villain) =>
      villain.keywords.map((keyword) => keyword.name).includes(this._keyword)
    );

    return randomize(applicableVillains);
  }
}

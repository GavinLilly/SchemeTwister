import { CardStore } from '../../../factories/cardStore';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireCardWithBackup<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(
    private readonly _preferred: TCard,
    private readonly _backup: TCard
  ) {}

  getRequiredCard = (store: CardStore<TCard>): TCard =>
    store.isAvailable(this._preferred) ? this._preferred : this._backup;
}

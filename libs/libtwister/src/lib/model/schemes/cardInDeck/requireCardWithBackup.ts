import { CardStore } from '../../../factories';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';

export class RequireCardWithBackup<TCard extends AbstractCardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(private _preferred: TCard, private _backup: TCard) {}

  getRequiredCard = (store: CardStore<TCard>): TCard =>
    store.isAvailable(this._preferred) ? this._preferred : this._backup;
}

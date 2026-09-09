import { CardStore } from '../../../stores/card-store';
import { CardGroup } from '../../cards/card-group';

import { IRequireCardBehaviour } from './require-card-behaviour.interface';

export class RequireCardWithBackup<TCard extends CardGroup>
  implements IRequireCardBehaviour<TCard>
{
  constructor(
    private readonly _preferred: TCard,
    private readonly _backup: TCard
  ) {}

  getRequiredCard = (store: CardStore<TCard>): TCard =>
    store.isAvailable(this._preferred) ? this._preferred : this._backup;
}

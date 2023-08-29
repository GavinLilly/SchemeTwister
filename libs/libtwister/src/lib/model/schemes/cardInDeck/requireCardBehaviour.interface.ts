import { MultiCardStore } from '../../../factories';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

export interface IRequireCardBehaviour<TCard extends AbstractCardGroup> {
  getRequiredCard(store: MultiCardStore<TCard>): TCard | TCard[];
}

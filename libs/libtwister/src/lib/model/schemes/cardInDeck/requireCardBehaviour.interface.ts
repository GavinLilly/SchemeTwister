import { CardStore } from '../../../factories';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

export interface IRequireCardBehaviour<TCard extends AbstractCardGroup> {
  getRequiredCard(store: CardStore<TCard>): TCard | TCard[];
}

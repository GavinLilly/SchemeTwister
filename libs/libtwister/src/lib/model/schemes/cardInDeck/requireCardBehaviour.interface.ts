import { CardStore } from '../../../factories/cardStore';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';

export interface IRequireCardBehaviour<TCard extends AbstractCardGroup> {
  getRequiredCard(store: CardStore<TCard>): TCard | TCard[];
}

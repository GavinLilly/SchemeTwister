import { CardStore } from '../../../stores/card-store';
import { CardGroup } from '../../cards/card-group';

export interface RequireCardBehaviour<TCard extends CardGroup> {
  getRequiredCard(store: CardStore<TCard>): TCard | TCard[];
}

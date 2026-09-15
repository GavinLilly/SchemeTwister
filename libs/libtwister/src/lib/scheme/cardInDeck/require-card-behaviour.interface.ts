import { CardGroup } from '../../shared/card-group';
import { CardStore } from '../../store/card-store';

export interface RequireCardBehaviour<TCard extends CardGroup> {
  getRequiredCard(store: CardStore<TCard>): TCard | TCard[];
}

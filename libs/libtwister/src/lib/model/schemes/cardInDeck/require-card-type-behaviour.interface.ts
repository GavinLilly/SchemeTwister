import { CardStore } from '../../../stores/card-store';
import { StoreOfStores } from '../../../stores/store-of-stores';
import { CardGroup } from '../../cards/card-group';
import { DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';

export interface IRequireCardTypeBehaviour<TCard extends CardGroup> {
  createDeck(
    cards: TCard[],
    rules: INumPlayerRules,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  getStore(storeOfStores: Readonly<StoreOfStores>): CardStore<TCard>;
}

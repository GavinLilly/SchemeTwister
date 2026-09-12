import { DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../game-setup/deck.interface';
import { CardGroup } from '../../shared/card-group';
import { NumPlayerRules } from '../../shared/rules.interface';
import { CardStore } from '../../stores/card-store';
import { StoreOfStores } from '../../stores/store-of-stores';

export interface RequireCardTypeBehaviour<TCard extends CardGroup> {
  createDeck(
    cards: TCard[],
    rules: NumPlayerRules,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  getStore(storeOfStores: Readonly<StoreOfStores>): CardStore<TCard>;
}

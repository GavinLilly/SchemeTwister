import { DeckType } from '../../constants/deck-type.const';
import { AdditionalDeckDeckMinimal } from '../../game-setup/deck/additional-deck.model';
import { HeroDeckMinimal } from '../../game-setup/deck/hero-deck.model';
import { VillainDeckMinimal } from '../../game-setup/deck/villain-deck.model';
import { NumPlayerRules } from '../../game-setup/rules/num-player-rules';
import { CardGroup } from '../../shared/card-group';
import { CardStore } from '../../store/card-store';
import { StoreOfStores } from '../../store/store-of-stores';

export interface RequireCardTypeBehaviour<TCard extends CardGroup> {
  createDeck(
    cards: TCard[],
    rules: NumPlayerRules,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  getStore(storeOfStores: Readonly<StoreOfStores>): CardStore<TCard>;
}

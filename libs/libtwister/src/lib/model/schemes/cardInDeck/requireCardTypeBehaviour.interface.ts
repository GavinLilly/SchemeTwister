import { CardStore } from '../../../factories/cardStore';
import { StoreOfStores } from '../../../factories/storeOfStores';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { DeckType } from '../../types/deckType.type';

export interface IRequireCardTypeBehaviour<TCard extends AbstractCardGroup> {
  createDeck(
    cards: TCard[],
    rules: INumPlayerRules,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  getStore(storeOfStores: Readonly<StoreOfStores>): CardStore<TCard>;
}

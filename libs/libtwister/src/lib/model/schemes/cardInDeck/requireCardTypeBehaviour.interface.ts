import { CardStore, StoreOfStores } from '../../../factories';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types/deckType.type';

export interface IRequireCardTypeBehaviour<TCard extends AbstractCardGroup> {
  createDeck(
    cards: TCard[],
    rules: INumPlayerRules,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  getStore(storeOfStores: StoreOfStores): CardStore<TCard>;
}

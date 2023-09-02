import { CardStore, StoreOfStores } from '../../../factories';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types';

export interface IRequireCardTypeBehaviour<TCard extends AbstractCardGroup> {
  createDeck(
    deck:
      | HeroDeckMinimal
      | VillainDeckMinimal
      | AdditionalDeckDeckMinimal
      | undefined,
    cards: TCard[],
    rules: INumPlayerRules,
    deckType: DeckType
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  getStore(storeOfStores: StoreOfStores): CardStore<TCard>;
}

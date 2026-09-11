import { StoreOfStores } from '../../../stores/store-of-stores';
import { CardGroup } from '../../cards/card-group';
import { DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeck,
  HeroDeck,
  VillainDeck,
} from '../../interfaces/deck.interface';
import { NumPlayerRules } from '../../interfaces/rules.interface';
import { SchemeMinusRules } from '../../types/scheme-minus-rules.type';
import { Scheme } from '../scheme';

import { RequireCardBehaviour } from './require-card-behaviour.interface';
import { RequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireCardInDeckScheme<TCard extends CardGroup> extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private readonly _requireCard: RequireCardBehaviour<TCard>,
    private readonly _requireCardType: RequireCardTypeBehaviour<TCard>,
    private readonly _deck: DeckType
  ) {
    super(scheme);
  }

  protected override initialiseHeroDeck(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): HeroDeck {
    if (this._deck !== 'HERO') {
      return super.initialiseHeroDeck(rules, store, numPlayers);
    }

    const picked = this._getPickedCard(store);

    return this._requireCardType.createDeck(
      picked,
      rules,
      this._deck
    ) as HeroDeck;
  }

  protected override initialiseVillainDeck(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): VillainDeck {
    const emptyDeck = super.initialiseVillainDeck(rules, store);

    if (this._deck !== 'VILLAIN') {
      return emptyDeck;
    }

    const picked = this._getPickedCard(store);

    return {
      ...emptyDeck,
      ...this._requireCardType.createDeck(picked, rules, this._deck),
    };
  }

  protected override initialiseAdditionalDecks(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): AdditionalDeck | undefined {
    if (this._deck !== 'ADDITIONAL') {
      return super.initialiseAdditionalDecks(rules, store);
    }

    const picked = this._getPickedCard(store);

    return this._requireCardType.createDeck(picked, rules, this._deck);
  }

  private _getPickedCard(store: Readonly<StoreOfStores>): TCard[] {
    const applicableStore = this._requireCardType.getStore(store);
    const cards = this._requireCard.getRequiredCard(applicableStore);

    const cardsAsArray = Array.isArray(cards) ? cards : [cards];
    return cardsAsArray.map((card) => applicableStore.pickOne(card));
  }
}

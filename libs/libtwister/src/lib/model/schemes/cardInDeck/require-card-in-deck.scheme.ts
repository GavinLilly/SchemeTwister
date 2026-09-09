import { StoreOfStores } from '../../../stores/store-of-stores';
import { CardGroup } from '../../cards/card-group';
import { DeckType } from '../../constants/deck-type.const';
import {
  IAdditionalDeckDeck,
  IHeroDeck,
  IVillainDeck,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { SchemeMinusRules } from '../../types/scheme-minus-rules.type';
import { Scheme } from '../scheme';

import { IRequireCardBehaviour } from './require-card-behaviour.interface';
import { IRequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireCardInDeckScheme<TCard extends CardGroup> extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private readonly _requireCard: IRequireCardBehaviour<TCard>,
    private readonly _requireCardType: IRequireCardTypeBehaviour<TCard>,
    private readonly _deck: DeckType
  ) {
    super(scheme);
  }

  protected override initialiseHeroDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): IHeroDeck {
    if (this._deck !== 'HERO') {
      return super.initialiseHeroDeck(rules, store, numPlayers);
    }

    const picked = this._getPickedCard(store);

    return this._requireCardType.createDeck(
      picked,
      rules,
      this._deck
    ) as IHeroDeck;
  }

  protected override initialiseVillainDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): IVillainDeck {
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
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): IAdditionalDeckDeck | undefined {
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

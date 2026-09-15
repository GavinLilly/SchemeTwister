import { DeckType } from '../../constants/deck-type.const';
import { AdditionalDeck } from '../../game-setup/deck/additional-deck.model';
import { HeroDeck } from '../../game-setup/deck/hero-deck.model';
import { VillainDeck } from '../../game-setup/deck/villain-deck.model';
import { NumPlayerRules } from '../../game-setup/rules/num-player-rules';
import { CardGroup } from '../../shared/card-group';
import { StoreOfStores } from '../../store/store-of-stores';
import { SchemeMinusRules } from '../scheme-minus-rules.type';
import { Scheme } from '../scheme.model';
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

import { StoreOfStores } from '../../../stores/store-of-stores';
import { CardGroup } from '../../cards/card-group';
import { DECK_TYPE, DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeck,
  AdditionalDeckDeckMinimal,
  HeroDeck,
  HeroDeckMinimal,
  VillainDeck,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { NumPlayerRules } from '../../interfaces/rules.interface';
import { SchemeMinusRules } from '../../types/scheme-minus-rules.type';
import { Scheme } from '../scheme';

import { RequireCardBehaviour } from './require-card-behaviour.interface';
import { RequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

interface DeckRequirements<TCard extends CardGroup> {
  requireCard: RequireCardBehaviour<TCard>;
  requireCardType: RequireCardTypeBehaviour<TCard>;
}

export interface RequireCardsInDeckSchemeConfig {
  heroDeckRequirements?: DeckRequirements<CardGroup>;
  villainDeckRequirements?: DeckRequirements<CardGroup>;
  additionalDeckRequirements?: DeckRequirements<CardGroup>;
}

export class RequireCardsInDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private readonly _config: RequireCardsInDeckSchemeConfig
  ) {
    super(scheme);
  }

  protected override initialiseHeroDeck(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): HeroDeck {
    if (this._config.heroDeckRequirements !== undefined) {
      return this._setDeckRequirement(
        this._config.heroDeckRequirements,
        store,
        rules,
        DECK_TYPE.hero
      ) as HeroDeck;
    }

    return super.initialiseHeroDeck(rules, store, numPlayers);
  }

  protected override initialiseVillainDeck(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): VillainDeck {
    const emptyDeck = super.initialiseVillainDeck(rules, store);

    if (this._config.villainDeckRequirements !== undefined) {
      return {
        ...emptyDeck,
        ...this._setDeckRequirement(
          this._config.villainDeckRequirements,
          store,
          rules,
          DECK_TYPE.villain
        ),
      };
    }

    return emptyDeck;
  }

  protected initialiseAdditionalDecks(
    rules: Readonly<NumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): AdditionalDeck | undefined {
    if (this._config.additionalDeckRequirements !== undefined) {
      return this._setDeckRequirement(
        this._config.additionalDeckRequirements,
        store,
        rules,
        DECK_TYPE.additional
      );
    }

    return super.initialiseAdditionalDecks(rules, store);
  }

  private _setDeckRequirement(
    requirements: DeckRequirements<CardGroup>,
    store: Readonly<StoreOfStores>,
    rules: Readonly<NumPlayerRules>,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ) {
    const applicableStore = requirements.requireCardType.getStore(store);
    const cards = requirements.requireCard.getRequiredCard(applicableStore);

    const cardsAsArray = Array.isArray(cards) ? cards : [cards];
    const picked = cardsAsArray.map((card) => applicableStore.pickOne(card));

    return requirements.requireCardType.createDeck(
      picked,
      rules,
      deckType,
      deck
    );
  }
}

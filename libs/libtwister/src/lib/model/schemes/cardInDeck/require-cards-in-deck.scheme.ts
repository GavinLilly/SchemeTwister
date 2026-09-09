import { StoreOfStores } from '../../../stores/store-of-stores';
import { CardGroup } from '../../cards/card-group';
import { DECK_TYPE, DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IAdditionalDeckDeck,
  IHeroDeck,
  IVillainDeck,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { SchemeMinusRules } from '../../types/scheme-minus-rules.type';
import { Scheme } from '../scheme';

import { IRequireCardBehaviour } from './require-card-behaviour.interface';
import { IRequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

interface IDeckRequirements<TCard extends CardGroup> {
  requireCard: IRequireCardBehaviour<TCard>;
  requireCardType: IRequireCardTypeBehaviour<TCard>;
}

export interface IRequireCardsInDeckSchemeConfig {
  heroDeckRequirements?: IDeckRequirements<CardGroup>;
  villainDeckRequirements?: IDeckRequirements<CardGroup>;
  additionalDeckRequirements?: IDeckRequirements<CardGroup>;
}

export class RequireCardsInDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private readonly _config: IRequireCardsInDeckSchemeConfig
  ) {
    super(scheme);
  }

  protected override initialiseHeroDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>,
    numPlayers: number
  ): IHeroDeck {
    if (this._config.heroDeckRequirements !== undefined) {
      return this._setDeckRequirement(
        this._config.heroDeckRequirements,
        store,
        rules,
        DECK_TYPE.hero
      ) as IHeroDeck;
    }

    return super.initialiseHeroDeck(rules, store, numPlayers);
  }

  protected override initialiseVillainDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): IVillainDeck {
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
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): IAdditionalDeckDeck | undefined {
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
    requirements: IDeckRequirements<CardGroup>,
    store: Readonly<StoreOfStores>,
    rules: Readonly<INumPlayerRules>,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ) {
    const applicableStore = requirements.requireCardType.getStore(store);
    const cards = requirements.requireCard.getRequiredCard(applicableStore);

    const cardsAsArray = cards instanceof Array ? cards : [cards];
    const picked = cardsAsArray.map((card) => applicableStore.pickOne(card));

    return requirements.requireCardType.createDeck(
      picked,
      rules,
      deckType,
      deck
    );
  }
}

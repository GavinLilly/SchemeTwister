import { MultiCardStore, StoreOfStores } from '../../factories';
import { Mastermind } from '../cards';
import { AbstractCardGroup } from '../cards/abstractCardGroup';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  IGameSetup,
} from '../interfaces';
import { DECK_TYPE, DeckType, NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';

export abstract class AbstractCardInDeckScheme<
  TCard extends AbstractCardGroup
> extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    protected required: TCard,
    protected deck: DeckType
  ) {
    super(scheme);
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const card = this.getStore(store).getOne(this.required.id);

    switch (this.deck) {
      case DECK_TYPE.HERO:
        partialHeroDeck = this.createDeck(partialHeroDeck, card, numPlayers);
        break;
      case DECK_TYPE.VILLAIN:
        partialVillainDeck = this.createDeck(
          partialVillainDeck,
          card,
          numPlayers
        );
        break;
      case DECK_TYPE.ADDITIONAL:
        partialAdditionalDeck = this.createDeck(
          partialAdditionalDeck,
          card,
          numPlayers
        );
        break;
    }

    return super.getSetup(
      numPlayers,
      selectedMastermind,
      store,
      advancedSolo,
      partialHeroDeck,
      partialVillainDeck,
      partialAdditionalDeck
    );
  }

  protected abstract createDeck(
    deck:
      | HeroDeckMinimal
      | VillainDeckMinimal
      | AdditionalDeckDeckMinimal
      | undefined,
    card: TCard,
    numPlayers: NumPlayers
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal;

  protected abstract getStore(
    storeOfStores: StoreOfStores
  ): MultiCardStore<TCard>;
}

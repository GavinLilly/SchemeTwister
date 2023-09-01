import { StoreOfStores } from '../../../factories';
import { Mastermind } from '../../cards';
import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../../interfaces';
import { DeckType, NumPlayers, SchemeMinusRules } from '../../types';
import { Scheme } from '../Scheme';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';
import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

export class RequireCardInDeckScheme<
  TCard extends AbstractCardGroup
> extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _requireCard: IRequireCardBehaviour<TCard>,
    private _requireCardType: IRequireCardTypeBehaviour<TCard>,
    private _deck: DeckType
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
    const applicableStore = this._requireCardType.getStore(store);
    const cards = this._requireCard.getRequiredCard(applicableStore);

    const cardsAsArray = cards instanceof Array ? cards : [cards];
    const picked = cardsAsArray.map((card) => applicableStore.pickOne(card));

    const rules = this.rules[numPlayers];

    switch (this._deck) {
      case 'HERO':
        partialHeroDeck = this._requireCardType.createDeck(
          partialHeroDeck,
          picked,
          rules,
          this._deck
        );
        break;
      case 'VILLAIN':
        partialVillainDeck = this._requireCardType.createDeck(
          partialVillainDeck,
          picked,
          rules,
          this._deck
        );
        break;
      case 'ADDITIONAL':
        partialAdditionalDeck = this._requireCardType.createDeck(
          partialAdditionalDeck,
          picked,
          rules,
          this._deck
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
}

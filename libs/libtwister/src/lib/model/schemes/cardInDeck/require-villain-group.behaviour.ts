import { CardStore } from '../../../stores/card-store';
import { StoreOfStores } from '../../../stores/store-of-stores';
import { VillainGroup } from '../../cards/villain-group';
import { DeckType } from '../../constants/deck-type.const';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  VillainDeckMinimal,
} from '../../interfaces/deck.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { Scheme } from '../scheme';

import { IRequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireVillainGroup
  implements IRequireCardTypeBehaviour<VillainGroup>
{
  createDeck(
    cards: VillainGroup[],
    rules: INumPlayerRules,
    deckType: DeckType,
    deck: VillainDeckMinimal | AdditionalDeckDeckMinimal = {}
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numVillainGroups: number | undefined;

    const isAdditionalDeckVillains = rules.additionalDeck.some(
      (deck) => deck.deck?.numVillainGroups !== undefined
    );

    if (deckType === 'ADDITIONAL' && isAdditionalDeckVillains) {
      numVillainGroups = rules.additionalDeck
        .map((deck) => deck.deck?.numVillainGroups)
        .filter(
          (numVillainGroups): numVillainGroups is number => !!numVillainGroups
        )
        .reduce((prev, curr) => prev + curr, 0);
    } else {
      numVillainGroups = rules.villainDeck.numVillainGroups;
    }

    const extra = cards.length > 1 ? cards.slice(1) : [];

    deck.villains = Scheme.addToDeck(
      deck.villains ?? [],
      cards[0],
      numVillainGroups,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): CardStore<VillainGroup> =>
    storeOfStores.villainStore;
}

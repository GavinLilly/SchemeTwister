import { StoreOfStores, CardStore } from '../../../factories';
import { VillainGroup } from '../../cards/villainGroup';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types/deckType.type';
import { Scheme } from '../Scheme';

import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

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
      deck.villains ?? new Set(),
      cards[0],
      numVillainGroups,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): CardStore<VillainGroup> =>
    storeOfStores.villainStore;
}

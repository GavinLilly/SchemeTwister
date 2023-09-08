import { StoreOfStores, CardStore } from '../../../factories';
import { VillainGroup } from '../../cards';
import {
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  INumPlayerRules,
} from '../../interfaces';
import { DeckType } from '../../types';
import { Scheme } from '../Scheme';

import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

export class RequireVillainGroup
  implements IRequireCardTypeBehaviour<VillainGroup>
{
  createDeck(
    deck: VillainDeckMinimal | AdditionalDeckDeckMinimal = {},
    cards: VillainGroup[],
    rules: INumPlayerRules,
    deckType: DeckType
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numVillainGroups: number | undefined;

    if (
      deckType === 'ADDITIONAL' &&
      rules.additionalDeck?.deck?.numVillainGroups
    ) {
      numVillainGroups = rules.additionalDeck.deck.numVillainGroups;
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

import { StoreOfStores, MultiCardStore } from '../../factories';
import { VillainGroup } from '../cards';
import { AdditionalDeckDeckMinimal, VillainDeckMinimal } from '../interfaces';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';
import { AbstractCardInDeckScheme } from './abstractCardInDeckScheme';

export class RequireVillainGroupInDeckScheme extends AbstractCardInDeckScheme<VillainGroup> {
  protected createDeck(
    deck: VillainDeckMinimal | AdditionalDeckDeckMinimal = {},
    card: VillainGroup,
    numPlayers: NumPlayers
  ): VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numVillainGroups: number | undefined;

    const rules = this.rules[numPlayers];
    if (
      this.deck === 'ADDITIONAL' &&
      rules.additionalDeck?.deck?.numVillainGroups
    ) {
      numVillainGroups = rules.additionalDeck.deck.numVillainGroups;
    } else {
      numVillainGroups = rules.villainDeck.numVillainGroups;
    }

    deck.villains = Scheme.addToDeck(
      deck.villains ?? [],
      card,
      numVillainGroups
    );

    return deck;
  }

  protected getStore(
    storeOfStores: StoreOfStores
  ): MultiCardStore<VillainGroup> {
    return storeOfStores.villainStore;
  }
}

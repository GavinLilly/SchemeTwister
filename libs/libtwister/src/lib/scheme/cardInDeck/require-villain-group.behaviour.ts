import { DeckType } from '../../constants/deck-type.const';
import { AdditionalDeckDeckMinimal } from '../../game-setup/deck/additional-deck.model';
import { HeroDeckMinimal } from '../../game-setup/deck/hero-deck.model';
import { VillainDeckMinimal } from '../../game-setup/deck/villain-deck.model';
import { NumPlayerRules } from '../../game-setup/rules/num-player-rules';
import { CardStore } from '../../store/card-store';
import { StoreOfStores } from '../../store/store-of-stores';
import { VillainGroup } from '../../villain-group/villain-group.model';
import { Scheme } from '../scheme.model';
import { RequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireVillainGroup
  implements RequireCardTypeBehaviour<VillainGroup>
{
  createDeck(
    cards: VillainGroup[],
    rules: NumPlayerRules,
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

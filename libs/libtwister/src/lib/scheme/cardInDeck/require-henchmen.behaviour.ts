import { DeckType } from '../../constants/deck-type.const';
import { AdditionalDeckDeckMinimal } from '../../game-setup/deck/additional-deck.model';
import { HeroDeckMinimal } from '../../game-setup/deck/hero-deck.model';
import { VillainDeckMinimal } from '../../game-setup/deck/villain-deck.model';
import { NumPlayerRules } from '../../game-setup/rules/num-player-rules';
import { Henchmen } from '../../henchmen/henchmen.model';
import { CardStore } from '../../store/card-store';
import { StoreOfStores } from '../../store/store-of-stores';
import { Scheme } from '../scheme.model';
import { RequireCardTypeBehaviour } from './require-card-type-behaviour.interface';

export class RequireHenchmen implements RequireCardTypeBehaviour<Henchmen> {
  createDeck(
    cards: Henchmen[],
    rules: NumPlayerRules,
    deckType: DeckType,
    deck: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal = {}
  ): HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal {
    let numHenchmen: number | undefined;

    const isAdditionalDeckHenchmen = rules.additionalDeck.some(
      (deck) => deck.deck?.numHenchmenGroups !== undefined
    );

    if (deckType === 'HERO' && rules.heroDeck.numHenchmenGroups !== undefined) {
      numHenchmen = rules.heroDeck.numHenchmenGroups;
    } else if (deckType === 'ADDITIONAL' && isAdditionalDeckHenchmen) {
      numHenchmen = rules.additionalDeck
        .map((deck) => deck.deck?.numHenchmenGroups)
        .filter((numHenchmen): numHenchmen is number => !!numHenchmen)
        .reduce((prev, curr) => prev + curr, 0);
    } else {
      numHenchmen = rules.villainDeck.numHenchmenGroups;
    }

    const extra = cards.length > 1 ? cards.slice(1) : [];

    deck.henchmen = Scheme.addToDeck(
      deck.henchmen ?? [],
      cards[0],
      numHenchmen,
      ...extra
    );

    return deck;
  }

  getStore = (storeOfStores: StoreOfStores): CardStore<Henchmen> =>
    storeOfStores.henchmenStore;
}

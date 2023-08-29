import { StoreOfStores } from '../../factories';
import { VillainGroup, Hero, Mastermind } from '../cards';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../interfaces';
import { DECK_TYPE, NumPlayers, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireCardWithBackup,
  RequireVillainGroup,
} from './cardInDeck';

export class TheDarkPhoenixSagaScheme extends RequireCardInDeckScheme<VillainGroup> {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: RequireCard<VillainGroup>,
    private _requiredHero: RequireCardWithBackup<Hero>
  ) {
    super(
      scheme,
      requiredVillain,
      new RequireVillainGroup(),
      DECK_TYPE.VILLAIN
    );
  }

  public override getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): IGameSetup {
    const hero = this._requiredHero.getRequiredCard(store.heroStore);

    const pickedHero = store.heroStore.getOne(hero);

    partialVillainDeck.heroes = Scheme.addToDeck(
      partialVillainDeck.heroes ?? [],
      pickedHero,
      this.rules[numPlayers].villainDeck.numHeroes
    );

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

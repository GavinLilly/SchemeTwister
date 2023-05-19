import { StoreOfStores } from '../../factories/storeOfStores';
import { Mastermind } from '../mastermind';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHero,
  VillainDeckMinimal,
} from '../interfaces';
import { SchemeMinusRules } from '../interfaces/newScheme.interface';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class RequireHeroInAdditionalDeckScheme extends Scheme {
  constructor(scheme: SchemeMinusRules, private _requiredHero: IHero) {
    super(scheme);
  }

  public override async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: Mastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): Promise<IGameSetup> {
    const hero = store.heroStore.getOne(this._requiredHero.id);

    partialAdditionalDeck.heroes = Scheme.addToDeck(
      partialAdditionalDeck.heroes,
      hero,
      this.rules[numPlayers].additionalDeck?.deck?.numHeroes
    );

    return await super.getSetup(
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

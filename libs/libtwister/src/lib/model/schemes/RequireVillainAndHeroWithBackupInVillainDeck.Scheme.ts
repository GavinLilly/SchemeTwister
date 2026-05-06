import { StoreOfStores } from '../../factories';
import { VillainGroup, Hero } from '../cards';
import { INumPlayerRules, IVillainDeck } from '../interfaces';
import { DECK_TYPE, SchemeMinusRules } from '../types';

import { Scheme } from './Scheme';
import {
  RequireCard,
  RequireCardInDeckScheme,
  RequireCardWithBackup,
  RequireVillainGroup,
} from './cardInDeck';

export class RequireVillainAndHeroWithBackupInVillainDeckScheme extends RequireCardInDeckScheme<VillainGroup> {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: RequireCard<VillainGroup>,
    private readonly _requiredHero: RequireCardWithBackup<Hero>
  ) {
    super(
      scheme,
      requiredVillain,
      new RequireVillainGroup(),
      DECK_TYPE.villain
    );
  }

  protected override initialiseVillainDeck(
    rules: Readonly<INumPlayerRules>,
    store: Readonly<StoreOfStores>
  ): IVillainDeck {
    const hero = this._requiredHero.getRequiredCard(store.heroStore);

    const pickedHero = store.heroStore.pickOne(hero);

    const superDeck = super.initialiseVillainDeck(rules, store);

    return {
      ...superDeck,
      heroes: Scheme.addToDeck(
        superDeck.heroes ?? [],
        pickedHero,
        rules.villainDeck.numHeroes
      ),
    };
  }
}

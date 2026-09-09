import { StoreOfStores } from '../../factories/storeOfStores';
import { Hero } from '../cards/hero';
import { VillainGroup } from '../cards/villainGroup';
import { IVillainDeck } from '../interfaces/deck.interface';
import { INumPlayerRules } from '../interfaces/rules.interface';
import { DECK_TYPE } from '../types/deckType.type';
import { SchemeMinusRules } from '../types/schemeMinusRules.type';

import { RequireCard } from './cardInDeck/requireCard';
import { RequireCardInDeckScheme } from './cardInDeck/requireCardInDeckScheme';
import { RequireCardWithBackup } from './cardInDeck/requireCardWithBackup';
import { RequireVillainGroup } from './cardInDeck/requireVillainGroup';
import { Scheme } from './Scheme';

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

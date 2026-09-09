import { StoreOfStores } from '../../stores/store-of-stores';
import { Hero } from '../cards/hero';
import { VillainGroup } from '../cards/villain-group';
import { DECK_TYPE } from '../constants/deck-type.const';
import { IVillainDeck } from '../interfaces/deck.interface';
import { INumPlayerRules } from '../interfaces/rules.interface';
import { SchemeMinusRules } from '../types/scheme-minus-rules.type';

import { RequireCardInDeckScheme } from './cardInDeck/require-card-in-deck.scheme';
import { RequireCardWithBackup } from './cardInDeck/require-card-with-backup.behaviour';
import { RequireCard } from './cardInDeck/require-card.behaviour';
import { RequireVillainGroup } from './cardInDeck/require-villain-group.behaviour';
import { Scheme } from './scheme';

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

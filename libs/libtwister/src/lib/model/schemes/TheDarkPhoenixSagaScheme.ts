import { VillainGroup, Hero } from '../cards';
import { IGameSetup } from '../interfaces/gameSetup.interface';
import { DECK_TYPE, SchemeMinusRules } from '../types';

import { IGetSetupConfig, Scheme } from './Scheme';
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
      DECK_TYPE.villain
    );
  }

  public override getSetup(config: IGetSetupConfig): IGameSetup {
    const hero = this._requiredHero.getRequiredCard(config.store.heroStore);

    const pickedHero = config.store.heroStore.pickOne(hero);

    return super.getSetup({
      ...config,
      partialVillainDeck: {
        heroes: Scheme.addToDeck(
          config.partialVillainDeck?.heroes ?? new Set(),
          pickedHero,
          this.rules[config.numPlayers].villainDeck.numHeroes
        ),
      },
    });
  }
}

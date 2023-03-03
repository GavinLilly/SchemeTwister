import { StoreOfStores } from '../../factories/storeOfStores';
import { AbstractMastermind } from '../AbstractMastermind';
import { CardType } from '../cardType.enum';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHero,
  VillainDeckMinimal,
} from '../interfaces';
import { NumPlayers } from '../types';

import { Scheme } from './Scheme';

export class PlayerPicksAHeroScheme extends Scheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    store: StoreOfStores,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const nonPickedHeroes: IHero[] = [];
    for (let i = 1; i <= numPlayers; i++) {
      nonPickedHeroes.push({
        cardType: CardType.HERO,
        gameSetId: this.gameSetId,
        id: `79131ea5-5bea-4ae2-89e6-d024cda16a5${i}`,
        name: `Player ${i} picks a hero`,
      });
    }

    partialHeroDeck.heroes = Scheme.addToDeck(
      partialHeroDeck.heroes,
      nonPickedHeroes[0],
      this.rules[numPlayers].villainDeck.numVillainGroups,
      ...nonPickedHeroes.slice(1)
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

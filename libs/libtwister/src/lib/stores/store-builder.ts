import { Henchmen } from '../model/cards/henchmen';
import { Hero } from '../model/cards/hero';
import { Mastermind } from '../model/cards/mastermind/mastermind';
import { VillainGroup } from '../model/cards/villain-group';
import { GameSet } from '../model/game-set';

import { StoreOfStores } from './store-of-stores';

interface Build {
  build(): StoreOfStores;
}

interface StepD {
  withHenchmenGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): Build;
}

interface StepC {
  withVillainGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepD;
}

interface StepB {
  withMastermindGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepC;
}

interface StepA {
  withHeroGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepB;
}

/**
 * A builder that will progressively create a StoreOfStores.
 */
export class StoreBuilder implements StepA, StepB, StepC, StepD, Build {
  private readonly _heroGamesets: GameSet[] = [];
  private readonly _villainGamesets: GameSet[] = [];
  private readonly _mastermindGamesets: GameSet[] = [];
  private readonly _henchmenGamesets: GameSet[] = [];

  withHeroGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepB {
    this._heroGamesets.push(gameset, ...otherGamesets);
    return this;
  }

  withVillainGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepD {
    this._heroGamesets.push(gameset, ...otherGamesets);
    return this;
  }

  withMastermindGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepC {
    this._heroGamesets.push(gameset, ...otherGamesets);
    return this;
  }

  withHenchmenGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): Build {
    this._heroGamesets.push(gameset, ...otherGamesets);
    return this;
  }

  withAllFromGamesets = (
    gameset: GameSet,
    ...otherGamesets: GameSet[]
  ): Build =>
    this.withHeroGamesets(gameset, ...otherGamesets)
      .withMastermindGamesets(gameset, ...otherGamesets)
      .withVillainGamesets(gameset, ...otherGamesets)
      .withHenchmenGamesets(gameset, ...otherGamesets);

  build(): StoreOfStores {
    const heroes: Hero[] = this._heroGamesets.flatMap(
      (gameSet) => gameSet.heroes
    );

    const masterminds: Mastermind[] = this._mastermindGamesets
      .flatMap((gameSet) => gameSet.masterminds)
      .filter((mastermind): mastermind is Mastermind => !!mastermind);

    const villains: VillainGroup[] = this._villainGamesets
      .flatMap((gameSet) => gameSet.villains)
      .filter((villain): villain is VillainGroup => !!villain);

    const henchmen: Henchmen[] = this._henchmenGamesets
      .flatMap((gameSet) => gameSet.henchmen)
      .filter((henchmen): henchmen is Henchmen => !!henchmen);

    return new StoreOfStores(heroes, masterminds, villains, henchmen);
  }
}

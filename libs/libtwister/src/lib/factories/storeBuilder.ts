import { GameSet, Hero, Mastermind, VillainGroup, IHenchmen } from '../model';

import { StoreOfStores } from './storeOfStores';

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
    this._heroGamesets.push(gameset);
    this._heroGamesets.push(...otherGamesets);
    return this;
  }

  withVillainGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepD {
    this._villainGamesets.push(gameset);
    this._villainGamesets.push(...otherGamesets);
    return this;
  }

  withMastermindGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): StepC {
    this._mastermindGamesets.push(gameset);
    this._mastermindGamesets.push(...otherGamesets);
    return this;
  }

  withHenchmenGamesets(gameset: GameSet, ...otherGamesets: GameSet[]): Build {
    this._henchmenGamesets.push(gameset);
    this._henchmenGamesets.push(...otherGamesets);
    return this;
  }

  withSingleGameset(gameset: GameSet): Build {
    this._heroGamesets.push(gameset);
    this._villainGamesets.push(gameset);
    this._mastermindGamesets.push(gameset);
    this._henchmenGamesets.push(gameset);
    return this;
  }

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

    const henchmen: IHenchmen[] = this._henchmenGamesets
      .flatMap((gameSet) => gameSet.henchmen)
      .filter((henchmen): henchmen is IHenchmen => !!henchmen);

    return new StoreOfStores(heroes, masterminds, villains, henchmen);
  }
}

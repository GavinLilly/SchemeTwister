import { IScheme } from '../schemes/scheme.interface';
import { IMastermind } from '../masterminds/mastermind.interface';
import { IHero } from '../heroes/hero.interface';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup } from '../villains/villainGroup.interface';

export interface IHeroDeck {
  heroes: IHero[],
  bystanders: number
}

export interface IVillainDeck {
  henchmen: IHenchmen[],
  villains: IVillainGroup[]
  hero?: IHero,
  bystanders: number,
  twists: number
}

export interface IGameSetup {
  numPlayers: number,
  scheme: IScheme,
  mastermind: IMastermind,
  heroDeck: IHeroDeck,
  villainDeck: IVillainDeck,
  numWounds?: number
}

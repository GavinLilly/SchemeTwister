import { IScheme } from '../schemes/scheme.interface';
import { IMastermind } from '../masterminds/mastermind.interface';
import { IHero } from '../heroes/hero.interface';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup } from '../villains/villainGroup.interface';

export interface IGameSetup {
  numPlayers: number,
  scheme: IScheme,
  mastermind: IMastermind,
  heroDeck: IHero[],
  villainDeck: {
    henchmen: IHenchmen[],
    villains: IVillainGroup[]
    hero?: IHero
  }
}

import { IScheme } from './scheme.interface';
import { IMastermind } from './mastermind.interface';
import { IHero } from './hero.interface';
import { IHenchmen } from './henchmen.interface';
import { IVillainGroup } from './villainGroup.interface';

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

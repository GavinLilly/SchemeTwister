import { CardSet } from '../cardSet';
import { DarkCity } from './darkCity.henchmen';
import { IHenchmen } from './henchmen.interface';
import { Legendary } from './legendary.henchmen';
import { X_Men } from './xMen.henchmen';

export class Henchmen extends CardSet<IHenchmen> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly X_MEN = X_Men

  public static readonly ALL = [
    ...Object.values(Henchmen.LEGENDARY),
    ...Object.values(Henchmen.DARK_CITY),
    ...Object.values(Henchmen.X_MEN)
  ]
}

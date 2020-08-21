import { CardSet } from '../cardSet';
import { DarkCity } from './darkCity.henchmen';
import { IHenchmen } from './henchmen.interface';
import { Legendary } from './legendary.henchmen';

export class Henchmen extends CardSet<IHenchmen> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;

  public static readonly ALL = [
    ...Object.values(Henchmen.LEGENDARY),
    ...Object.values(Henchmen.DARK_CITY)
  ]
}

import { IHero } from './hero.interface';
import { Legendary } from './legendary.heroes';
import { DarkCity } from "./darkCity.heroes";
import { CardSet } from '../cardset/cardSet';

export class Heroes extends CardSet<IHero> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;

  public static readonly ALL = [
    ...Object.values(Heroes.LEGENDARY),
    ...Object.values(Heroes.DARK_CITY)
  ]
}

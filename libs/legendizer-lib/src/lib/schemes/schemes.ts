import { CardSet } from '../cardSet';
import { Legendary } from './legendary.schemes';
import { DarkCity } from './darkCity.schemes';
import { IScheme } from './scheme.interface';

export class Schemes extends CardSet<IScheme> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;

  public static readonly ALL = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY)
  ];
}

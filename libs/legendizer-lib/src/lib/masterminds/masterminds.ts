import { CardSet } from '../cardSet';
import { IMastermind } from './mastermind.interface';
import { Legendary } from './legendary.masterminds';
import { DarkCity } from './darkCity.masterminds';

export class Masterminds extends CardSet<IMastermind> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;

  public static GetAllMasterminds(): IMastermind[] {
    return [
      ...Object.values(Masterminds.LEGENDARY),
      ...Object.values(Masterminds.DARK_CITY)
    ]
  }
}

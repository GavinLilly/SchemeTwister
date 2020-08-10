import { CardSet } from '../cardSet';
import { IVillainGroup } from './villainGroup.interface';
import { Legendary } from './legendary.villains';
import { DarkCity } from './darkCity.villains';

export class VillainGroups extends CardSet<IVillainGroup> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;

  public static GetAllVillainGroups(): IVillainGroup[] {
    return [
      ...Object.values(VillainGroups.LEGENDARY),
      ...Object.values(VillainGroups.DARK_CITY)
    ]
  }
}

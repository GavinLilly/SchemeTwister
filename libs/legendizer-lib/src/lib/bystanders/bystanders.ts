import { DarkCity } from "./darkCity.bystanders";
import { Legendary } from "./legendary.bystanders";

export class Bystanders {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;

  public static readonly ALL = [
    ...Object.values(Bystanders.LEGENDARY),
    ...Object.values(Bystanders.DARK_CITY)
  ]
}

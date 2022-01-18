import { DarkCity } from './darkCity.bystanders';
import { Legendary } from './legendary.bystanders';
import { MessiahComplex } from './messiahComplex.bystanders';
import { X_Men } from './xmen.bystanders';

export class Bystanders {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly X_MEN = X_Men;
  public static readonly MESSIAH_COMPLEX = MessiahComplex;

  public static readonly ALL = [
    ...Object.values(Bystanders.LEGENDARY),
    ...Object.values(Bystanders.DARK_CITY),
    ...Object.values(Bystanders.X_MEN),
    ...Object.values(Bystanders.MESSIAH_COMPLEX),
  ];
}

import { VillainGroupModel } from "@legendizer/shared/villainGroup/types";
import { GameSet } from "@legendizer/shared/gameSet/data";
import { CardType } from '@legendizer/shared/base/types';

export class DarkCityVillainGroups extends VillainGroupModel {
  public static EMISSARIES_OF_EVIL = new DarkCityVillainGroups({
    id: '2d106df3-c74d-4795-99b7-09d0ee33d87d',
    name: 'Emissaries of Evil',
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.VILLAINGROUP
  });

  public static FOUR_HORSEMEN = new DarkCityVillainGroups({
    id: '2cdf94da-fae7-42f6-8433-598f7626a409',
    name: 'Four Horsemen',
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.VILLAINGROUP
  });

  public static MARAUDERS = new DarkCityVillainGroups({
    id: '511d57f2-37b3-4497-9dda-8258b13a3b2e',
    name: 'Marauders',
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.VILLAINGROUP
  });

  public static MLF = new DarkCityVillainGroups({
    id: '8f6079bf-4cdb-4fe0-a339-d2796efe2ab5',
    name: 'MLF',
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.VILLAINGROUP
  });

  public static STREETS_OF_NEW_YORK = new DarkCityVillainGroups({
    id: '79037670-3af3-482b-a410-54e780caa7ea',
    name: 'Streets of New York',
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.VILLAINGROUP
  });

  public static UNDERWORLD = new DarkCityVillainGroups({
    id: '4265325a-0aae-4b28-90db-6305f8883a6a',
    name: 'Underworld',
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.VILLAINGROUP
  });
}

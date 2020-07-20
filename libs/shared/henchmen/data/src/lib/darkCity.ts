import { HenchmenModel } from '@legendizer/shared/henchmen/types';
import { GameSet } from '@legendizer/shared/gameSet/data';
import { CardType, Keyword } from '@legendizer/shared/base/types';
import { HeroClass } from "@legendizer/shared/hero/types";

export class DarkCityHenchmen extends HenchmenModel {
  public static MAGGIA_GOONS = new DarkCityHenchmen({
    id: '11b440df-9d3d-4546-af21-498058cfe6f7',
    name: 'Maggia Goons',
    keyword: Keyword.BRIBE,
    fight:
      'KO one of your Heroes.',
    attackPoints: 4,
    victoryPoints: 1,
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.HENCHMEN
  });

  public static PHALANX = new DarkCityHenchmen({
    id: 'afd81252-9b06-42fa-bc75-e7b928ca49aa',
    name: 'Phalanx',
    fight:
      `Reveal a ${HeroClass.TECH} Hero or KO one of your Heroes with an Attack icon`,
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: GameSet.DARK_CITY,
    cardType: CardType.HENCHMEN
  });
}

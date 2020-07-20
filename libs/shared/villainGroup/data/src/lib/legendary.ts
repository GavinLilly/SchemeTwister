import { VillainGroupModel } from "@legendizer/shared/villainGroup/types";
import { GameSet } from "@legendizer/shared/gameSet/data";
import { CardType } from '@legendizer/shared/base/types';

export class LegendaryVillainGroups extends VillainGroupModel {
  public static BROTHERHOOD = new LegendaryVillainGroups({
    id: '1777054a-5b47-49c5-a951-fadb598b0265',
    name: 'Brotherhood',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });

  public static ENEMIES_OF_ASGARD = new LegendaryVillainGroups({
    id: 'dfe941c5-ed7f-4f2b-80ce-25435af90a5d',
    name: 'Enemies of Asgard',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });

  public static HYDRA = new LegendaryVillainGroups({
    id: 'd7d0f179-b55a-42b8-8875-fbe633f27482',
    name: 'HYDRA',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });

  public static MASTERS_OF_EVIL = new LegendaryVillainGroups({
    id: 'f55315f9-009b-4f6b-a999-7a745270980a',
    name: 'Masters of Evil',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });

  public static RADIATION = new LegendaryVillainGroups({
    id: 'a3fe1ac8-8772-4161-9528-7c044687bc77',
    name: 'Radiation',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });

  public static SKRULLS = new LegendaryVillainGroups({
    id: 'a3ee145c-54a6-4f76-8593-423a0a3360f0',
    name: 'Skrulls',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });

  public static SPIDER_FOES = new LegendaryVillainGroups({
    id: '5c0a948c-9573-41e1-af8b-0fd4cbfecf72',
    name: 'Spider-Foes',
    gameSet: GameSet.LEGENDARY,
    cardType: CardType.VILLAINGROUP
  });
}

import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'BROTHERHOOD'
  | 'ENEMIES_OF_ASGARD'
  | 'HYDRA'
  | 'MASTERS_OF_EVIL'
  | 'RADIATION'
  | 'SKRULLS'
  | 'SPIDER_FOES';

type VillainRecord = Record<VillainGroupNames, IVillainGroup>;

export const Legendary: VillainRecord = {
  BROTHERHOOD: {
    id: '1777054a-5b47-49c5-a951-fadb598b0265',
    name: 'Brotherhood',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
  ENEMIES_OF_ASGARD: {
    id: 'dfe941c5-ed7f-4f2b-80ce-25435af90a5d',
    name: 'Enemies of Asgard',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
  HYDRA: {
    id: 'd7d0f179-b55a-42b8-8875-fbe633f27482',
    name: 'HYDRA',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
  MASTERS_OF_EVIL: {
    id: 'f55315f9-009b-4f6b-a999-7a745270980a',
    name: 'Masters of Evil',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
  RADIATION: {
    id: 'a3fe1ac8-8772-4161-9528-7c044687bc77',
    name: 'Radiation',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
  SKRULLS: {
    id: 'a3ee145c-54a6-4f76-8593-423a0a3360f0',
    name: 'Skrulls',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
  SPIDER_FOES: {
    id: '5c0a948c-9573-41e1-af8b-0fd4cbfecf72',
    name: 'Spider-Foes',
    gameSet: GameSets.LEGENDARY,
    cardType: CardType.VILLAINGROUP,
  },
};

import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'DEADPOOLS_SECRET_SECRET_WARS'
  | 'GUARDIANS_OF_KNOWHERE'
  | 'KUNLUN'
  | 'MONSTER_METROPOLIS'
  | 'UTOPOLIS'
  | 'XMEN_92';

export const SecretWarsVolume2: Record<VillainGroupNames, IVillainGroup> = {
  DEADPOOLS_SECRET_SECRET_WARS: {
    id: '529d6fbb-9b0b-48d1-b0ab-da7569dfd50d',
    name: "Deadpool's Secret Secret Wars",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  GUARDIANS_OF_KNOWHERE: {
    id: 'd1d5e11f-0027-419a-8775-52c19e5da2ae',
    name: 'Guardians of Knowhere',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  KUNLUN: {
    id: '5813628d-f039-4564-a804-1c34a1d15954',
    name: "K'un-Lun",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  MONSTER_METROPOLIS: {
    id: 'e1d78a8a-797b-48cb-8001-166540608666',
    name: 'Monster Metropolis',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  UTOPOLIS: {
    id: 'e983b5b3-8d3e-4e4e-a670-f0d78875eccc',
    name: 'Utopolis',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
  XMEN_92: {
    id: 'fc09e974-dada-444d-8434-f3e9924354d9',
    name: "X-Men '92",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SECRET_WARS_VOLUME_2,
  },
};

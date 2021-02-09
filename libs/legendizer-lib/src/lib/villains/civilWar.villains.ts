import { CardType } from "../cardSet";
import { GameSets } from "../gamesets";
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  |  'CSA_SPECIAL_MARSHALS'
  |  'GREAT_LAKES_AVENGERS'
  |  'HEROES_FOR_HIRE'
  |  'REGISTRATION_ENFORCERS'
  |  'SHIELD_ELITE'
  |  'SUPERHUMAN_REGISTRATION_ACT'
  |  'THUNDERBOLTS'
;

export const CivilWar: Record<VillainGroupNames, IVillainGroup> = {
    CSA_SPECIAL_MARSHALS: {
        id: '329fc891-df4a-4e35-88fd-6f80286f1cef',
        name: 'CSA Special Marshals',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
    GREAT_LAKES_AVENGERS: {
        id: 'ea8b66c5-c730-4ada-b4c7-9996a5bb93c8',
        name: 'Great Lakes Avengers',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
    HEROES_FOR_HIRE: {
        id: 'df3e0ea4-edbd-4b2d-8057-69520b52d009',
        name: 'Heroes for Hire',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
    REGISTRATION_ENFORCERS: {
        id: 'a0c95643-8d51-44aa-9abf-24bd586be5ce',
        name: 'Registration Enforcers',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
    SHIELD_ELITE: {
        id: 'a38d4861-93d6-4edf-ab0c-81290e452944',
        name: 'S.H.I.E.L.D. Elite',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
    SUPERHUMAN_REGISTRATION_ACT: {
        id: '81509e55-b191-4731-bab2-c2c365f0fc1d',
        name: 'Superhuman Registration Act',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
    THUNDERBOLTS: {
        id: '556db507-4b67-4273-8420-c06ba339f8a0',
        name: 'Thunderbolts',
        cardType: CardType.VILLAINGROUP,
        gameSet: GameSets.CIVIL_WAR
    },
};
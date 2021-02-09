import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'MAXIMUS_THE_MAD'
  | 'EPIC_MAXIMUS_THE_MAD'
  | 'EMPEROR_VULCAN_OF_THE_SHIAR'
  | 'EPIC_EMPEROR_VULCAN_OF_THE_SHIAR';

export const RealmOfKings: Record<MastermindNames, IMastermind> = {
  MAXIMUS_THE_MAD: {
    id: '24610267-6acd-4b1f-899c-48b3a43af94f',
    name: 'Maximus the Mad',
    alwaysLeads: [VillainGroups.REALM_OF_KINGS.INHUMAN_REBELLION],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  EPIC_MAXIMUS_THE_MAD: {
    id: 'ae9b5953-23ca-4066-8ab4-d76291644ae7',
    name: 'Epic Maximus the Mad',
    alwaysLeads: [VillainGroups.REALM_OF_KINGS.INHUMAN_REBELLION],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  EMPEROR_VULCAN_OF_THE_SHIAR: {
    id: '21b14872-e23d-46d6-b721-94483dad908a',
    name: "Emperor Vulcan of the Shi'ar",
    alwaysLeads: [VillainGroups.REALM_OF_KINGS.SHIAR_IMPERIAL_ELITE],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REALM_OF_KINGS,
  },
  EPIC_EMPEROR_VULCAN_OF_THE_SHIAR: {
    id: 'e3289899-5eb0-45fa-8321-3e24e1dd1fd3',
    name: "Emperor Vulcan of the Shi'ar",
    alwaysLeads: [VillainGroups.REALM_OF_KINGS.SHIAR_IMPERIAL_ELITE],
    attackPoints: '12',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.REALM_OF_KINGS,
  },
};

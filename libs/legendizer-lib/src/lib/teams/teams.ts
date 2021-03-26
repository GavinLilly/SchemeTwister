import { ITeam } from './team.interface';

type Teams =
  | 'AVENGERS'
  | 'FANTASTIC_FOUR'
  | 'GUARDIANS_OF_THE_GALAXY'
  | 'HEROES_OF_ASGARD'
  | 'MARVEL_KNIGHTS'
  | 'SHIELD'
  | 'SPIDER_FRIENDS'
  | 'X_FORCE'
  | 'X_MEN'
  | 'CHAMPIONS'
  | 'NEW_WARRIORS'
  | 'HYDRA'
  | 'MERCS_FOR_MONEY'
  | 'FOES_OF_ASGARD'
  | 'INHUMANS'
  | 'ILLUMINATI'
  | 'CABAL'
  | 'VENOMVERSE'
  | 'CRIME_SYNDICATE'
  | 'SINISTER_SIX'
  | 'BROTHERHOOD'
  | 'WARBOUND';

export const Teams: Record<Teams, ITeam> = {
  AVENGERS: {
    name: 'Avengers',
    icon: '/assets/icons/teams/avengers.png',
  },
  FANTASTIC_FOUR: {
    name: 'Fantastic Four',
    icon: '/assets/icons/teams/fantastic-four.png',
  },
  GUARDIANS_OF_THE_GALAXY: {
    name: 'Guardians of the Galaxy',
    icon: '/assets/icons/teams/guardians.png',
  },
  HEROES_OF_ASGARD: {
    name: 'Heroes of Asgard',
    icon: '/assets/icons/teams/heroes-of-asgard.png',
  },
  MARVEL_KNIGHTS: {
    name: 'Marvel Knights',
    icon: '/assets/icons/teams/marvel-knights.png',
  },
  SHIELD: {
    name: 'S.H.I.E.L.D.',
    icon: '/assets/icons/teams/shield.png',
  },
  SPIDER_FRIENDS: {
    name: 'Spider Friends',
    icon: '/assets/icons/teams/spider-friends.png',
  },
  X_FORCE: {
    name: 'X-Force',
    icon: '/assets/icons/teams/x-force.png',
  },
  X_MEN: {
    name: 'X-Men',
    icon: '/assets/icons/teams/x-men.png',
  },
  BROTHERHOOD: {
    name: 'Brotherhood',
    icon: '/assets/icons/teams/brotherhood.png',
  },
  CABAL: {
    name: 'Cabal',
    icon: '/assets/icons/teams/cabal.png',
  },
  CHAMPIONS: {
    name: 'Champions',
    icon: '/assets/icons/teams/champions.png',
  },
  CRIME_SYNDICATE: {
    name: 'Crime Syndicate',
    icon: '/assets/icons/teams/crime-syndicate.png',
  },
  FOES_OF_ASGARD: {
    name: 'Foes of Asgard',
    icon: '/assets/icons/teams/foes-of-asgard.png',
  },
  HYDRA: {
    name: 'Hydra',
    icon: '/assets/icons/teams/hydra.png',
  },
  ILLUMINATI: {
    name: 'Illuminati',
    icon: '/assets/icons/teams/illuminati.png',
  },
  INHUMANS: {
    name: 'Inhumans',
    icon: '/assets/icons/teams/inhumans.png',
  },
  MERCS_FOR_MONEY: {
    name: 'Mercs for Money',
    icon: '/assets/icons/teams/mercs-for-money.png',
  },
  NEW_WARRIORS: {
    name: 'New Warriors',
    icon: '/assets/icons/teams/new-warriors.png',
  },
  SINISTER_SIX: {
    name: 'Sinister Six',
    icon: '/assets/icons/teams/sinister-six.png',
  },
  VENOMVERSE: {
    name: 'Venomverse',
    icon: '/assets/icons/teams/venomverse.png',
  },
  WARBOUND: {
    name: 'Warbound',
    icon: '/assets/icons/teams/warbound.png',
  },
};

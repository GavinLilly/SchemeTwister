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
  | 'WARBOUND'
  | 'CRIME_SYNDICATE';

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
  CHAMPIONS: {
    name: 'Champions',
    icon: '/assets/icons/teams/champions.svg',
  },
  WARBOUND: {
    name: 'Warbound',
    icon: '/assets/icons/teams/warbound.svg',
  },
  CRIME_SYNDICATE: {
    name: 'Crime Syndicate',
    icon: '/assets/icons/teams/crime-syndicate.svg',
  },
};

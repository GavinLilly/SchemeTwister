import { CardType, Keyword } from '../cardSet';
import { GameSets } from '../gamesets';
import { HeroClass } from '../heroes';
import { IHenchmen } from './henchmen.interface';

type HenchmenNames = 'GHOST_RACERS' | 'MODOKS' | 'THOR_CORPS';

export const SecretWarsVolume1: Record<HenchmenNames, IHenchmen> = {
  GHOST_RACERS: {
    id: '7c668768-6057-4fd2-a92b-6e529420595e',
    name: 'Ghost Racers',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    fight: `Reveal a ${HeroClass.COVERT} Hero or KO one of your Heroes with an Attack icon`,
  },
  MODOKS: {
    id: 'a0c09f47-1cc2-44c0-9916-1a722137e13a',
    name: 'M.O.D.O.K.s',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    fight:
      'KO a Hero from your discard pile or the HQ. If that Hero has a Recruit icon, you get +1 Recruit',
  },
  THOR_CORPS: {
    id: '571a2f40-875f-497a-8ae8-420685b1af1d',
    name: 'Thor Corps',
    attackPoints: '3',
    victoryPoints: 1,
    cardType: CardType.HENCHMEN,
    gameSet: GameSets.SECRET_WARS_VOLUME_1,
    fight: 'Gain this as a Hero.',
  },
};

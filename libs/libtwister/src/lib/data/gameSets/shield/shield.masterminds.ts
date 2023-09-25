import { MultiMastermind } from '../../../model';
import { HeroClass } from '../../enums';

import { ADAPT, HYDRA_LEVEL } from './shield.keywords';
import { META } from './shield.meta';
import { AIM_HYDRA_OFFSHOOT, HYDRA_ELITE } from './shield.villains';

export const HYDRA_HIGH_COUNCIL = new MultiMastermind(
  {
    id: '93764f78-07cf-42ff-8458-2b4832985107',
    name: 'Hydra High Council',
    gameSet: META,
    attackPoints: '7-16',
    victoryPoints: 6,
    alwaysLeads: [HYDRA_ELITE],
    keywords: [ADAPT, HYDRA_LEVEL],
    startOfGame: 'Adapt',
  },
  {
    name: 'Red Skull',
    specialRules: 'Red Skull gets +1 Attack for each two Hydra Levels.',
    masterStrike: 'Each player KOs one of their non-grey Heroes. Adapt.',
    fight: 'KO one of your grey Heroes. Adapt',
    attackPoints: '7+',
  },
  {
    name: 'Viper',
    specialRules: 'Viper gets +1 Attack for each Hydra Villain in the city.',
    masterStrike:
      'If there are any Hydra Villains in the city, each player gains a Wound. Adapt.',
    fight: 'Discard any number of cards, then draw that many cards. Adapt.',
    attackPoints: '9+',
  },
  {
    name: 'Arnim Zola',
    specialRules:
      'Arnim Zola gets + Attack equal to the total printed Attack of all heroes in the HQ.',
    masterStrike: 'Each player discards two Heroes with Attack icons. Adapt.',
    fight: 'You may gain a Hero from the HQ with an Attack icon. Adapt.',
    attackPoints: '6+',
  },
  {
    name: 'Baron Helmut Zemo',
    specialRules:
      'Baron Helmut Zemo gets -1 Attack for each Villain in your Victory Pile.',
    masterStrike:
      'Each player KOs a Hydra Villain from their Victory Pile or gains a Wound. Adapt.',
    fight:
      'Each other player KOs a Hydra Villain from their Victory Pile or gains a Wound. Adapt.',
    attackPoints: '16*',
  }
);

export const HYDRA_SUPER_ADAPTOID = new MultiMastermind(
  {
    id: 'ae671cab-2112-47e9-8349-1704dc4052d7',
    name: 'Hydra Super-Adaptoid',
    gameSet: META,
    attackPoints: '8-14',
    victoryPoints: 6,
    alwaysLeads: [AIM_HYDRA_OFFSHOOT],
    keywords: [ADAPT],
    startOfGame: 'Adapt',
  },
  {
    name: "Black Widow's Bite",
    masterStrike:
      'Each player KOs two Bystanders from their Victory Pile or gains a Wound. Adapt.',
    fight: `For each of your ${HeroClass.COVERT} Heroes, rescue a Bystander. Adapt.`,
    attackPoints: 8,
  },
  {
    name: "Captain America's Shield",
    masterStrike: `Each player reveals an ${HeroClass.INSTINCT} Hero or discards their hand and draws four cards. Adapt.`,
    fight:
      'You get +1 Recruit for each color of Hero you have (including grey). Adapt.',
    attackPoints: 10,
  },
  {
    name: "Iron Man's Armor",
    masterStrike: `Each player reveals a ${HeroClass.TECH} Hero or discards down to 3 cards. Adapt.`,
    fight: `Count your ${HeroClass.TECH} Heroes, then draw that many cards. Adapt.`,
    attackPoints: 12,
  },
  {
    name: "Thor's Hammer",
    masterStrike: `Each player reveals a ${HeroClass.RANGED} Hero or gains a Wound. Adapt.`,
    fight: `For each of your ${HeroClass.STRENGTH} Heroes, KO one of your Heroes. Adapt.`,
    attackPoints: 14,
  }
);

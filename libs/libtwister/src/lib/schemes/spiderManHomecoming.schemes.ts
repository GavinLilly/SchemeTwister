import { GameSets } from '../gamesets';
import { SpiderManHomecoming as SpiderManHomecomingKeywords } from '../keywords';
import { Teams } from '../teams';

import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'DISTRACT_THE_HERO'
  | 'EXPLOSION_AT_THE_WASHINGTON_MONUMENT'
  | 'FERRY_DISASTER'
  | 'SCAVENGE_ALIEN_WEAPONRY';

export const SpiderManHomecoming: Record<SchemeNames, IScheme> = {
  DISTRACT_THE_HERO: new Scheme({
    id: '764951d6-5b1c-4bf4-985a-c5804ea9b32e',
    name: 'Distract the Hero',
    setup: '8 Twists. Use at least one Spider Friends Hero.',
    twist: `If you get any Victory Points this turn, put this Twist on the bottom of the Villain Deck. Otherwise, stack this Twist next to the Scheme as a "Villainous Interruption."`,
    evilWins: 'When there have been 5 Villainous Interruptions.',
    requiredCards: {
      inHeroDeck: {
        team: Teams.SPIDER_FRIENDS,
        numHeroes: 1,
      },
    },
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
  }),
  EXPLOSION_AT_THE_WASHINGTON_MONUMENT: new Scheme(
    {
      id: 'aae82a96-6b45-4c36-b9bd-cc8ea15a2947',
      name: 'Explosion at the Washington Monument',
      setup:
        '8 Twists. Shuffle 18 Bystanders and 14 Wounds, then deal them evenly into eight decks. Put these decks in a row, as Floors of the Washington Monument.',
      twist: `KO the topmost Floor of the Washington Monument. You gain one of the Wounds KO'd this way.`,
      evilWins:
        "When 10 Bystanders are in the KO pile and/or Escape Pile, or all Floors are KO'd.",
      specialRules:
        "Whenever you fight a Villain, you may reveal any face-down card from any Floor. If it's a Bystander, rescue it. If it's a Wound, put it back face-up.",
      gameSet: GameSets.SPIDERMAN_HOMECOMING,
    },
    {
      additionalDeck: {
        name: 'Floors of the Washington Monument',
        deck: {
          numBystanders: 18,
          numWounds: 14,
        },
        instruction: 'Deal them evenly into eight decks',
      },
    }
  ),
  FERRY_DISASTER: new Scheme(
    {
      id: 'f5cde443-9109-436c-9393-082ab306d428',
      name: 'Ferry Disaster',
      setup:
        '9 Twists. Put the Bystander Stack above the Sewers as the "Ferry."',
      twist: `Twist 1-4: If there's a Villain in the city space below the Ferry, KO 2 Bystanders from the Ferry. Whether you KO'd or not, the Ferry moves one space left.
Twist 5-8: Same effect, but it moves right.
Twist 9: KO half the Bystanders from the Bystander deck, rounding up.`,
      evilWins: 'When 7 Bystanders are in the KO pile and/or Escape Pile.',
      gameSet: GameSets.SPIDERMAN_HOMECOMING,
    },
    {
      villainDeck: {
        numTwists: 9,
      },
    }
  ),
  SCAVENGE_ALIEN_WEAPONRY: new Scheme(
    {
      id: 'b28cb5ca-715f-4a3f-acf8-49d583131cc5',
      name: 'Scavenge Alien Weaponry',
      setup:
        '7 Twists. Add an extra Henchmen Group of 10 cards as "Smugglers."',
      twist: `Play two cards from the Villain Deck.`,
      evilWins:
        'When 3 Villains per player have escaped or the Villain Deck runs out.',
      specialRules: 'Smugglers have Striker.',
      gameSet: GameSets.SPIDERMAN_HOMECOMING,
      keywords: [SpiderManHomecomingKeywords.Striker],
    },
    {
      villainDeck: {
        numTwists: 7,
      },
    },
    {
      1: {
        villainDeck: {
          numHenchmenGroups: 2,
        },
      },
      2: {
        villainDeck: {
          numHenchmenGroups: 2,
        },
      },
      3: {
        villainDeck: {
          numHenchmenGroups: 2,
        },
      },
      4: {
        villainDeck: {
          numHenchmenGroups: 3,
        },
      },
      5: {
        villainDeck: {
          numHenchmenGroups: 3,
        },
      },
    }
  ),
};

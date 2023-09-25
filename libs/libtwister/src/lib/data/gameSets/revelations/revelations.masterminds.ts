import { EpicMastermindBuilder, IMastermind, Mastermind } from '../../../model';

import { MANDARINS_RINGS } from './revelations.henchmen';
import { DARK_MEMORIES, LOCATIONS } from './revelations.keywords';
import { META } from './revelations.meta';
import { HOODS_GANG, LETHAL_LEGION } from './revelations.villains';

const grimReaper = new EpicMastermindBuilder({
  name: 'Grim Reaper',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [LETHAL_LEGION],
  keywords: [LOCATIONS],
});

export const GRIM_REAPER = grimReaper.buildNormal({
  id: 'b595f6d1-33ab-47c8-834a-f47a01083193',
  attackPoints: '8+',
  specialRules:
    'Grim Reaper gets +1 Attack for each Location card in the city.',
  masterStrike:
    'This Strike enters the city as a 7 Attack "Graveyard" Location that says "This gets +2 Attack while there\'s a Villain here." It\'s Worth 5VP.',
});

export const EPIC_GRIM_REAPER = grimReaper.buildEpic({
  id: 'a9da7041-a927-4030-96b7-1641be3bd7df',
  attackPoints: '9+',
  specialRules:
    'Grim Reaper gets +2 Attack for each Location card in the city.',
  masterStrike:
    'This Strike enters the city as an 8 Attack "Graveyard" Location that says "This gets +3 Attack while there\'s a Villain here." It\'s worth 6VP. Then, if there are at least three Location cards in the city, each player gains a Wound.',
});

const hoodCommons: Pick<
  IMastermind,
  'gameSet' | 'victoryPoints' | 'alwaysLeads' | 'keywords'
> = {
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [HOODS_GANG],
  keywords: [DARK_MEMORIES, LOCATIONS],
};

export const THE_HOOD = new Mastermind({
  id: 'febabcdf-503e-4343-9389-3f901ebe345f',
  name: 'The Hood',
  attackPoints: '9+',
  masterStrike:
    'Each player reveals the top 6 cards of their deck, discards all the non-grey Heroes revealed, and puts the rest back in any order.',
  ...hoodCommons,
});

export const EPIC_HOOD = new Mastermind({
  id: '91622572-b2b3-48b1-9861-ba8233ad26d5',
  name: 'Epic Hood',
  attackPoints: '10+',
  masterStrike:
    'Each player discards their deck, then shuffles 6 random grey cards from their discard pile to form their new deck.',
  ...hoodCommons,
});

const mandarin = new EpicMastermindBuilder({
  name: 'Mandarin',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [MANDARINS_RINGS],
  keywords: [LOCATIONS],
});

export const MANDARIN = mandarin.buildNormal({
  id: 'a6dcfa1a-14f2-4f4b-b3d1-ef2740539dab',
  attackPoints: '16*',
  specialRules: `All Mandarin's Rings get +1 Attack.
Mandarin gets -1 Attack for each Mandarin's Ring among all players' Victory Piles. (-3 Attack for each in solo.)`,
  masterStrike:
    "Each player chooses a Mandarin's Ring from their Victory Pile to enter the city. Any player who didn't have a Ring gains a Wound instead.",
});

export const EPIC_MANDARIN = mandarin.buildEpic({
  id: '6bf519cd-ba2c-47ac-abf9-97c849b42d1e',
  attackPoints: '26*',
  specialRules: `All Mandarin's Rings get +2 Attack.
Mandarin gets -2 Attack for each Mandarin's Ring among all players' Victory Piles. (-6 Attack for each in solo.)`,
  masterStrike:
    "Each player chooses a Mandarin's Ring from their Victory Pile to enter the city. Any player who didn't have a Ring gains a Wound to the top of their deck instead.",
});

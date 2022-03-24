import { AbstractScheme } from '../../../model';
import { HeroClass } from '../../enums';

import { ASTRAL_PLANE, DEMONIC_BARGAIN, RITUAL_ARTIFACTS } from './keywords';
import { META } from './meta';

class ShadowsOfNightmareScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

export const CLAIM_SOULS_FOR_DEMONS = new ShadowsOfNightmareScheme(
  {
    id: 'c05aab18-4135-43c7-9aac-429bc443b063',
    name: 'Claim Souls for Demons',
    setup: '8 twists',
    twist: `1-3: Each player makes a Demonic Bargain to rescue a Bystander. If that Bargain wounds that player, stack that Bystander next to the Scheme as a "Tormented Soul" instead.
4-8: Each player makes a Demonic Bargain to gain a S.H.I.E.L.D. Officer. If that Bargain wounds that player, stack that Officer next to the Scheme as a "Tormented Soul" instead.`,
    evilWins:
      'When the number of Tormented Souls is four times the number of players.',
    keywords: [DEMONIC_BARGAIN],
  },
  8
);

export const WAR_OF_THE_DREAM_DIMENSION = new ShadowsOfNightmareScheme(
  {
    id: '6385b786-3648-45d0-8421-6645544f7dc5',
    name: 'War for the Dream Dimension',
    setup: '7 Twists. Add an extra Villain Group.',
    twist: `Reveal the top two cards of the Villain Deck. The Villain you revealed with the highest printed Attack enters the Astral Plane. (It does not do any Ambush abilities.) If you revealed a second Villain this way, that Villain enters the city. Put the rest of the revealed cards back in any order.`,
    evilWins:
      'When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out.',
    keywords: [ASTRAL_PLANE],
  },
  7
).overrideEachRule((rule) => {
  rule.villainDeck.numVillainGroups++;
  return rule;
});

export const CURSED_PAGES_OF_THE_DARKHOLD_TOME = new ShadowsOfNightmareScheme(
  {
    id: 'eaa8d1b5-897e-469f-98b1-70a5ef2417ef',
    name: 'Cursed Pages of the Darkhold Tome',
    setup:
      '11 Twists, representing Cursed Pages of the Darkhold Tome. Add an extra Villain Group.',
    twist:
      "Put this Cursed Page next to the Mastermind, plus a Cursed Page from any player's control or discard pile or the KO pile. For this turn only, the first time you fight a Villain or Mastermind, put one of the Mastermind's Cursed Pages into your discard pile.",
    specialRules:
      'Cursed Pages are Ritual Artifacts with "If you fought a Villain or Mastermind: You may discard this to get +3 Recruit."',
    evilWins:
      "When the Mastermind has 7 Cursed Pages at the end of any player's turn or the Villain Deck runs out.",
    keywords: [RITUAL_ARTIFACTS],
  },
  11
).overrideEachRule((rule) => {
  rule.villainDeck.numVillainGroups++;
  return rule;
});

export const DUELS_OF_SCIENCE_AND_MAGIC = new ShadowsOfNightmareScheme(
  {
    id: '253bf004-31e6-439f-a68f-b423ee3c0c9b',
    name: 'Duels of Science and Magic',
    setup:
      '2 players: 9 Twists. 1 or 4 players: 10 Twists. 3 or 5 players: 11 Twists.',
    twist: `1, 3, and 5: "Duel of Science": Each player reveals a ${HeroClass.TECH} or ${HeroClass.RANGED} Hero or discards down to 4 cards. If at least half the players (round up) failed to reveal, put this Twist next to the Mastermind as a "Duel Won."
2, 4, and 6: "Duel of Magic": Same effect, but with ${HeroClass.INSTINCT} or ${HeroClass.COVERT}.
7-11: "Duel of Science and Magic": Same effect, but each player must reveal at least three of these colors: ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH}, ${HeroClass.RANGED}.`,
    evilWins: 'When the Mastermind has won 5 Duels.',
  },
  10,
  9,
  11,
  10,
  11
);

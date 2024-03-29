import { SchemeDefinition, SoloBannedScheme } from '@schemetwister/libtwister';

import { META } from './fearItself.meta';

export const FEAR_ITSELF = new SchemeDefinition({
  id: '895b4808-285a-4b4b-b997-93cacaa3a9ee',
  name: 'Fear Itself',
  setup: '10 Twists.',
  twist: `KO an Ally from the Lair. The Fear Level goes down by 1.`,
  evilWins: 'When the Fear Level is 0',
  meta: { numTwists: 10 },
  gameSet: META,
});

export const LAST_STAND_AT_AVENGERS_TOWER = new SchemeDefinition({
  id: '5d754225-7031-4b95-b6dc-decbefcb81a2',
  name: 'Last Stand at Avengers Tower',
  setup: '6 Twists.',
  twist: `Stack this Twist above the Rooftops as "StarkTech Defenses." If there is an Adversary on the Rooftops, choose 3 Allies from the Lair & KO them.`,
  evilWins: 'When there are 13 non-grey Allies in the KO pile.',
  specialRules:
    'While an Adversary is on the Rooftops, it gets +1 Attack for each StarkTech Defenses.',
  meta: { numTwists: 6 },
  gameSet: META,
});

export const THE_TRAITOR = new SchemeDefinition({
  id: 'b2c79dfa-df65-45fb-91e3-9780bb565020',
  name: 'The Traitor',
  setup:
    "2+ players only. 8 Twists. Shuffle a 'Betrayal Deck' of 3 Bindings per player and a 9th Twist.",
  twist: `Twists 1-3: If there is no revealed Traitor, each player puts a 'Betrayal Card' from the Betrayal Deck face down in front of them and looks at it
Twists 8: Good wins! The Traitor reveals themself and also wins.`,
  evilWins: 'When twist 8 revealed',
  specialRules:
    "During your turn, you may reveal a Twist from your Betrayal Cards to become 'the Traitor'. If you do, each other player gains all the Bindings from their Betrayal Cards.",
  meta: {
    numTwists: 8,
    rules: (rule, num) => {
      rule.additionalDeck.push({
        name: 'Betrayal Deck',
        deck: {
          numTwists: 1,
          numWounds: num * 3,
        },
      });

      return rule;
    },
    overrideScheme: {
      schemeType: SoloBannedScheme,
    },
  },
  gameSet: META,
});

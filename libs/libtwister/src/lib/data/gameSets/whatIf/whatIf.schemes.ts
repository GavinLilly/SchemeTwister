import {
  DECK_TYPE,
  IRequireCardsInDeckSchemeConfig,
  RequireCard,
  RequireCardInDeckScheme,
  RequireCardsInDeckScheme,
  RequireHero,
  RequireKeyword,
  RequireVillainGroup,
  SchemeDefinition,
} from '../../../model';
import { HeroClass, KeywordName } from '../../enums';
import { RISE_OF_THE_LIVING_DEAD } from '../secretWarsVolume1/sw1.keywords';

import { PARTY_THOR } from './whatIf.heroes';
import { META } from './whatIf.meta';
import { INTERGALACTIC_PARTY_ANIMALS } from './whatIf.villains';

export const BREACH_THE_NEXUS_OF_ALL_REALITIES = new SchemeDefinition({
  id: '7ee06eca-dd44-4fca-be69-f85e79544657',
  name: 'Breach the Nexus of All Realities',
  setup:
    '(1-2 players: Use 3 Villain Groups.) Stack each Villain Group separately face down as its own "Reality." Add 2 Twists to each Reality. Shuffle together all the Henchmen, Master Strikes, and Bystanders for your player count and randomly distribute them amongst all the Realities, as evenly as possible. Shuffle each Reality separately.',
  specialRules:
    'Each turn, you choose which Reality (Villain Deck) plays a card. They all play into the same city.',
  twist:
    'Stack this Twist next to this Reality as a "Dimensional Breach." If this was the second Breach for that Reality, destroy that Reality, KO\'ing all its cards.',
  evilWins: 'When all Realities have been destroyed.',
  meta: {
    // 2 twists per villain group
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 6,
      '2': 6,
      '3': 6,
      '4': 6,
      '5': 8,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    rules: (rule, num) => {
      if (num === 1 || num === 2) {
        rule.villainDeck.numVillainGroups = 3;
      }
      return rule;
    },
  },
  gameSet: META,
});

export const COLLECT_AN_INTERSTELLAR_ZOO = new SchemeDefinition({
  id: '73cce6d9-e8b3-4e33-b5c7-bfbc6a352569',
  name: 'Collect an Interstellar Zoo',
  setup: '11 Twists',
  twist: `Each player reveals their hand. Starting with the current player, then clockwise, the first player to have one of this kind of Hero in their hand or discard pile stacks it next to this Scheme, "stolen for the Zoo."
Twist 1: ${HeroClass.STRENGTH} T2: ${HeroClass.INSTINCT} T3: ${HeroClass.COVERT} T4: ${HeroClass.TECH} T5: ${HeroClass.RANGED} T6: 5-cost T7: 4-cost T8: 3-cost T9: 0-cost T10: Recruit icon. T11: Attack icon.`,
  evilWins: 'When the Zoo has 5 Heroes.',
  meta: { numTwists: 11 },
  gameSet: META,
});

export const MARVEL_ZOMBIES = new SchemeDefinition({
  id: '0fbee5b0-3df7-4d12-9186-620c5a234b94',
  name: 'Marvel Zombies',
  setup:
    '4 Twists. Include exactly one Villain Group with "Rise of the Living Dead." Add 8 random cards from an extra Hero to the Villain Deck. 1-2 players; Add 3 extra Bystanders.',
  specialRules:
    'Hero cards from the Villain Deck are "Zombie" Villains with Attack equal to their cost +1, worth VP equal to their cost. They have "Ambush: Rise of the Living Dead. Fight: Play a copy of this card as a Hero, then put it into your Victory Pile as a Villain." (It still has Rise.)',
  twist:
    'Each Villain in the city with "Rise of the Living Dead" escapes. Then play another card from the Villain Deck.',
  evilWins:
    'When there are 3 Villains per player in the Escape pile or the Villain Deck runs out.',
  meta: {
    numTwists: 4,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireKeyword(KeywordName.RISE_OF_THE_LIVING_DEAD),
        new RequireVillainGroup(),
        DECK_TYPE.villain,
      ],
    },
    rules: (rule, num) => {
      if (
        (num === 1 || num === 2) &&
        rule.villainDeck.numBystanders !== undefined
      ) {
        rule.villainDeck.numBystanders += 3;
      }

      rule.villainDeck.numHeroes = 1;

      return rule;
    },
  },
  gameSet: META,
  keywords: [RISE_OF_THE_LIVING_DEAD],
});

export const TRASH_EARTH_WITH_HUGEST_PARTY_EVER = new SchemeDefinition({
  id: 'c45eca7b-5b39-45ce-96aa-1a55bb588609',
  name: 'Trash Earth with Hugest Party Ever',
  setup:
    '6 Twists. Always include the Party Thor Hero and Intergalactic Party Animals Villain Group.',
  twist:
    'If Frigga, Mother of Thor, is in play, stack this Twist next to the Scheme as "Discovered Wreckage." Otherwise: Search the Villain Deck for Frigga and she does her Ambush ability. Then shuffle this Twist back into the Villain Deck.',
  specialRules: "You can't fight or defeat Frigga.",
  evilWins: 'When 5 Wreckages have been Discovered.',
  meta: {
    numTwists: 6,
    overrideScheme: {
      schemeType: RequireCardsInDeckScheme,
      params: [
        {
          heroDeckRequirements: {
            requireCard: new RequireCard(PARTY_THOR),
            requireCardType: new RequireHero(),
          },
          villainDeckRequirements: {
            requireCard: new RequireCard(INTERGALACTIC_PARTY_ANIMALS),
            requireCardType: new RequireVillainGroup(),
          },
        } as IRequireCardsInDeckSchemeConfig,
      ],
    },
  },
  gameSet: META,
});

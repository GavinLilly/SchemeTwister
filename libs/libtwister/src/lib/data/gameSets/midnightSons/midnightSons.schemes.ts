import {
  DECK_TYPE,
  RequireCard,
  RequireCardInDeckScheme,
  RequireCardName,
  RequireHero,
  RitualSacrificeToSummonChthonScheme,
  SchemeDefinition,
} from '../../../model';
import { MOONLIGHT_AND_SUNLIGHT } from '../theNewMutants/theNewMutants.keywords';

import { BLOOD_FRENZY, HUNT_FOR_VICTIMS } from './midnightSons.keywords';
import { META } from './midnightSons.meta';
import { LILIN } from './midnightSons.villains';

export const SIRE_VAMPIRES_AT_THE_BLOOD_BANK = new SchemeDefinition({
  id: '35072834-b3dc-4e9f-922d-2adc010b9cac',
  name: 'Sire Vampires at the Blood Bank',
  setup:
    '10 Twists. Add an extra Henchmen Group of 10 cards as "Vampire Neonates". Put this Scheme above the Bank to mark it as a the "Blood Bank"',
  specialRules: `All "Vampire Neonates" also have ${BLOOD_FRENZY.name}. While in the Blood Bank, they instead have double ${BLOOD_FRENZY.name}`,
  twist:
    'If there is a Villain in the Blood Bank, stack a card from the Bystander Deck next to the Scheme as a "Vampire Thrail". Otherwise, move a Villain from another city space to the Blood Bank. Either way, play another card from the Villain Deck.',
  evilWins: 'Where there are 5 Vampire Trails or the Villain Deck runs out.',
  keywords: [BLOOD_FRENZY],
  meta: {
    numTwists: 10,
    rules: (rule) => {
      rule.villainDeck.numHenchmenGroups++;
      return rule;
    },
  },
  gameSet: META,
});

export const RITUAL_SACRIFICE_TO_SUMMON_CHTHON = new SchemeDefinition({
  id: '50291f3a-b89e-486c-ac09-787ae29043c3',
  name: 'Ritual Sacrifice to Summon Chthon',
  setup:
    '6 Twists, plus 1 per player. Add Lilin as an extra Villain Group. If using Lilith: Use 1 Twist total (and still use an extra Villain Group)',
  twist: `1-4: A villain of Mastermind Hunts for Victims
5-11: The Mastermind Hunts for Victims`,
  specialRules:
    'When 5 Bystanders are in the KO pile shuffle all Twists from the KO pile back in the Villain Deck. Then this Scheme Transforms into "Greate Old One Chthon" (Flit it over). Then KO all other Masterminds and their remaining Tactics.',
  evilWins: 'When all players are destroyed',
  keywords: [HUNT_FOR_VICTIMS],
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      1: 7,
      2: 8,
      3: 9,
      4: 10,
      5: 11,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
    overrideScheme: {
      schemeType: RitualSacrificeToSummonChthonScheme,
      params: [new RequireCard(LILIN)],
    },
  },
  gameSet: META,
});

export const MIDNIGHT_MASSACRE = new SchemeDefinition({
  id: 'ea4c7dc2-ecc6-468a-8b4f-86e918f19a78',
  name: 'Midnight Massacre',
  setup: '11 Twists. Add all 14 cards for any Blade Hero to the Villain Deck',
  specialRules: `Blade Hero cards in the Villain Deck and city are demonically-possessed "Switchblade" Villains attack equal to their printed cost. Their only abilities are "Sunlight: To fight this, you must also spend 3 buy. Moonlight: ${BLOOD_FRENZY.name}: Fight: Either KO this card or choose a player to gain it as a Hero"`,
  twist:
    'For each Switchblade Villain in the city and/or Escape Pile, KO the top three cards of the Hero Deck. No matter how many there were, play another card from the Villain Deck.',
  evilWins: 'When the Hero Deck or Villain Deck runs out.',
  keywords: [MOONLIGHT_AND_SUNLIGHT, BLOOD_FRENZY],
  meta: {
    numTwists: 11,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCardName('Blade'),
        new RequireHero(),
        DECK_TYPE.VILLAIN,
      ],
    },
  },
  gameSet: META,
});

export const WAGER_AT_BLACKJACK_FOR_HEROES_SOULS = new SchemeDefinition({
  id: '2ec6574e-a50c-4855-92e3-22a246379b3b',
  name: "Wager at Blackjack for Heroes' Souls",
  setup: '11 Twists. Add two extra Heroes',
  twist: `Reveal cards from the Hero Deck, adding up their total cost unti you choose to stop or your Total exceeds 21. If you Total exceeds 21 you "bust" and the Mastermind wins the wager. If you didn't bust, then do the same thing for the Mastermind, stopping as soon as their Total is at least 17. If their Total exceeds 21 then they "bust" and you win the wager. If no one busts then you win the wager if you Total is higher. If the Mastermind's Total is equal or higher, they win.
If you win, you may gain one of the revealed Heroes that costs 6 or less. If the Mastermind wins, stack one of the revealed Heroes next to the Scheme as a "Wagered Soul". Either way, put the rest of the revealed Heroes on the bottom of the Hero Deck in random order.`,
  evilWins: 'When there are 4 Wagered Souls',
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.heroDeck.numHeroes += 2;
      return rule;
    },
  },
  gameSet: META,
});

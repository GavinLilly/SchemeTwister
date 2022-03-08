import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  AbstractScheme,
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
  VillainDeckMinimal,
  NumPlayers,
} from '../../../model';
import { SoloBannedScheme } from '../../../model/soloBannedScheme';
import { HeroClass } from '../../enums';

import { META } from './meta';

class LegendaryScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

export const THE_LEGACY_VIRUS = new LegendaryScheme(
  {
    id: 'b9171c60-c3c3-4482-91e5-38ba1d2b3a6a',
    name: 'The Legacy Virus',
    setup: '8 Twists. Wound stack holds 6 Wounds per player.',
    twist: `Each player reveals a ${HeroClass.TECH} Hero or gains a Wound.`,
    evilWins: 'If the Wound stack runs out.',
  },
  8
).overrideEachRule((rule, num) => {
  rule.numWounds = num * 6;
  return rule;
});

export const MIDTOWN_BANK_ROBBERY = new LegendaryScheme(
  {
    id: '7d06db7a-d3d0-48fe-be7a-dbe6a273ad03',
    name: 'Midtown Bank Robbery',
    setup: '8 Twists. 12 total Bystanders in the Villain Deck.',
    specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
    twist:
      'Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.',
    evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
  },
  8
).overrideDefaultRules({ villainDeck: { numBystanders: 12 } });

export const NEGATIVE_ZONE_PRISON_BREAKOUT = new SoloBannedScheme(
  {
    id: '7ad1b3ed-efd8-4b2a-bd6a-ca500fc0f1af',
    name: 'Negative Zone Prison Breakout',
    setup: '8 Twists. Add an extra Henchman group to the Villain Deck.',
    twist: 'Play the top 2 cards of the Villain Deck.',
    evilWins: 'If 12 Villains escape.',
  },
  META.id,
  8
).overrideEachRule((rule) => {
  rule.villainDeck.numHenchmenGroups++;
  return rule;
});

export const PORTALS_TO_THE_DARK_DIMENSION = new LegendaryScheme(
  {
    id: '9fd584fc-f6d5-4027-9a86-b1a2e11408de',
    name: 'Portals to the Dark Dimension',
    setup: '7 Twists. Each Twist is a Dark Portal.',
    twist: `1: Put the Dark Portal above the Mastermind. The Mastermind gets +1 Attack.
2-6: Put the Dark Portal in the leftmost city space that doesn"t yet have a Dark Portal. Villains in that city space get +1 Attack.
7: Evil Wins!`,
    evilWins: 'If 7 twists are revealed',
    specialRules: 'Each Twist is a Dark Portal.',
  },
  7
);

export const REPLACE_EARTHS_LEADERS_WITH_KILLBOTS = new LegendaryScheme(
  {
    id: '34543e98-d863-4395-a1ec-c6a190b2fb08',
    name: "Replace Earth's Leaders with Killbots",
    setup:
      '5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck.',
    specialRules:
      'Bystanders in the Villain Deck count as Killbot Villains, with Attack equal to the number of Twists next to this Scheme.',
    twist: 'Put the Twist next to this Scheme.',
    evilWins: 'If 5 "Killbots" escape.',
  },
  5
).overrideDefaultRules({
  villainDeck: {
    numBystanders: 18,
  },
  additionalDeck: {
    name: 'Killbot attack',
    deck: {
      numTwists: 3,
    },
  },
});

class SecretInvasionOfTheSkrullShapeshiftersScheme extends LegendaryScheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const skrulls = (await import('./villains')).SKRULLS;

    const skrullsPicked = villainStore.getOne(skrulls.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      skrullsPicked,
      this.rules[numPlayers].villainDeck.numVillainGroups
    );

    return await super.getSetup(
      numPlayers,
      selectedMastermind,
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore,
      advancedSolo,
      partialHeroDeck,
      partialVillainDeck,
      partialAdditionalDeck
    );
  }
}

export const SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS =
  new SecretInvasionOfTheSkrullShapeshiftersScheme(
    {
      id: '81a8b233-aa28-4258-833e-4cd9fe5d051a',
      name: 'Secret Invasion of the Skrull Shapeshifters',
      setup:
        '8 Twists. 6 Heroes. Skrull Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.',
      specialRules:
        "Heroes in the Villain Deck count as Skrull Villains with Attack equal to the Hero's Cost +2. If you defeat that Hero, you gain it.",
      twist:
        'The highest-cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above.',
      evilWins: 'If 6 Heroes get into the Escaped Villains pile.',
    },
    8
  ).overrideDefaultRules({ heroDeck: { numHeroes: 6 } });

export const SUPER_HERO_CIVIL_WAR = new SoloBannedScheme(
  {
    id: '8d8eb57c-ec8a-402c-b0de-8afd8805f00f',
    name: 'Super Hero Civil War',
    setup:
      'For 2-3 players, use 8 Twists. For 4-5 players, use 5 Twists. If only 2 players, use only 4 Heroes in the Hero Deck.',
    twist: 'KO all the Heroes in the HQ.',
    evilWins: 'If the Hero Deck runs out.',
  },
  META.id,
  0,
  8,
  8,
  5,
  5
).overrideEachRule((rule, num) => {
  if (num === 2) {
    rule.heroDeck.numHeroes = 4;
  }
  return rule;
});

export const UNLEASH_THE_POWER_OF_THE_COSMIC_CUBE = new LegendaryScheme(
  {
    id: '6fc89682-eb0f-45b4-88c7-5f0e3dc8fcc0',
    name: 'Unleash the Power of the Cosmic Cube',
    setup: '8 twists',
    twist: `1-4: Put the Twist next to the Scheme.
5-6: Each player gains a Wound.
7: Each player gains 3 Wounds.
8: Evil Wins!`,
    evilWins: 'If 8 twists are revealed',
  },
  8
);

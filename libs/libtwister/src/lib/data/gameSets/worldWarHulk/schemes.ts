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
import { randomize } from '../../../utils/randomize';

import { CROSS_DIMENSIONAL_RAMPAGE } from './keywords';
import { META } from './meta';

class WorldWarHulkScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

export const BREAK_THE_PLANET_ASUNDER = new WorldWarHulkScheme(
  {
    id: '92fa1f10-1bee-468e-8a7c-6c008531e491',
    name: 'Break the Planet Asunder',
    setup: '9 Twists. 7 Heroes.',
    twist: `Stack this Twist next to the Scheme as a "Tectonic Break." Then KO each Hero from the HQ whose printed Attack is less than the number of Tectonic Breaks (no printed Attack counts as 0)`,
    evilWins: "When 25 non-grey Heroes are KO'd.",
  },
  9
).overrideDefaultRules({ heroDeck: { numHeroes: 7 } });

class CytoplasmSpikeInvasionScheme extends WorldWarHulkScheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): Promise<IGameSetup> {
    const cytoplasm = (await import('./henchmen')).CYTOPLASM_SPIKES;
    const cytoplasmPicked = henchmenStore.getOne(cytoplasm.id);

    partialAdditionalDeck.henchmen = AbstractScheme.addToDeck(
      partialAdditionalDeck.henchmen,
      cytoplasmPicked
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

export const CYTOPLASM_SPIKE_INVASION = new CytoplasmSpikeInvasionScheme(
  {
    id: '19b6bae6-3122-4893-b066-afb5e189697f',
    name: 'Cytoplasm Spike Invasion',
    setup:
      '10 Twists. Shuffle together 20 Bystanders and 10 Cytoplasm Spike Henchmen as an "Infected Deck."',
    twist: `Reveal the top three cards of the Infected Deck. KO all Bystanders you revealed. All Spikes you revealed enter the city.`,
    evilWins:
      'When the KO pile and Escape Pile combine to have 18 Bystanders and/or Spikes.',
  },
  10
).overrideDefaultRules({
  additionalDeck: {
    name: 'Infected Deck',
    deck: {
      numBystanders: 20,
      numHenchmenGroups: 1,
    },
  },
});

class FallOfTheHulksScheme extends WorldWarHulkScheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const allHulks = heroStore.availableCards.filter((hero) =>
      hero.name.toLowerCase().includes('hulk')
    );
    const twoHulks = randomize(allHulks, 2);

    twoHulks.forEach((hulk) => {
      heroStore.getOne(hulk.id);
      const idx = allHulks.indexOf(hulk);
      allHulks.splice(idx, 1);
    });

    allHulks.forEach((hulk) => heroStore.removeCard(hulk.id));

    partialHeroDeck.heroes = AbstractScheme.addToDeck(
      partialHeroDeck.heroes,
      twoHulks[0],
      this.rules[numPlayers].heroDeck.numHeroes,
      twoHulks[1]
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

export const FALL_OF_THE_HULKS = new FallOfTheHulksScheme(
  {
    id: '106067b6-7589-4ac8-afd5-31ca59d607ab',
    name: 'Fall of the Hulks',
    setup:
      '10 Twists. 6 Wounds per player in Wound Stack. Use exactly two Heroes with "Hulk" in their Hero Names.',
    twist: `Twist 3-6: Cross-Dimension Hulk Rampage.
Twist 7-10: Each player gains a Wound.`,
    evilWins: 'When the Wound Stack runs out.',
    keywords: [CROSS_DIMENSIONAL_RAMPAGE],
  },
  10
).overrideEachRule((rule, num) => {
  rule.numWounds = num * 6;
  return rule;
});

export const GLADIATOR_PITS_OF_SAKAAR = new WorldWarHulkScheme(
  {
    id: 'bcd13b7e-d66e-4365-afb6-8163958871f9',
    name: 'Gladiator Pits of Sakaar',
    setup: '6 Twists.',
    twist: `Until the start of your next turn, each player can only play cards from a single Team of their choice during their turn. (e.g. S.H.I.E.L.D., Avengers, X-Men, Warbound, etc.)`,
    evilWins:
      'When 2 Villains per player have escaped or the Villain Deck runs out.',
  },
  6
);

class AdditionalHulkDeckScheme extends WorldWarHulkScheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck?: HeroDeckMinimal,
    partialVillainDeck?: VillainDeckMinimal,
    partialAdditionalDeck: AdditionalDeckDeckMinimal = {}
  ): Promise<IGameSetup> {
    const hulk = heroStore.getOneRandom((hero) =>
      hero.name.toLowerCase().includes('hulk')
    );

    partialAdditionalDeck.heroes = AbstractScheme.addToDeck(
      partialAdditionalDeck.heroes,
      hulk
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

export const MUTATING_GAMMA_RAYS = new AdditionalHulkDeckScheme(
  {
    id: 'c39541a2-9ba3-4491-b410-7ac6c4e8d8f9',
    name: 'Mutating Gamma Rays',
    setup:
      '7 Twists. Take 14 cards from an extra Hero with "Hulk" in its Hero Name. Put them in a face-up "Mutation Pile."',
    twist: `Twist 1-6: Each player in turn does the following Put a non-grey Hero from your hand into the Mutation Pile. Then you may put a different card name with the same cost from the Mutation Pile into your discard pile.
Twist 7: Evil Wins!`,
    evilWins: 'When 7 twists revealed',
  },
  7
).overrideDefaultRules({
  additionalDeck: {
    name: 'Mutation Pile',
    deck: {
      numHeroes: 1,
    },
  },
});

export const SHOOT_HULK_INTO_SPACE = new AdditionalHulkDeckScheme(
  {
    id: 'f39ee139-c92a-4c88-a68e-888414b3b00c',
    name: 'Shoot Hulk into Space',
    setup:
      '8 Twists. Take 14 cards from an extra Hero with "Hulk" in its Hero Name. Shuffle them into a "Hulk Deck."',
    twist: `Put 2 cards from the Hulk Deck into a face-up "Prison Ship" stack next to the S.H.I.E.L.D. Officer Stack.`,
    evilWins:
      'When there are 10 cards in the Prison Ship or the Hulk Deck runs out.',
    specialRules: 'You may recruit the top card of the Prison Ship stack.',
  },
  8
).overrideDefaultRules({
  additionalDeck: {
    name: 'Mutation Pile',
    deck: {
      numHeroes: 1,
    },
  },
});

export const SUBJUGATE_WITH_OBEDIENCE_DISKS = new WorldWarHulkScheme(
  {
    id: '0954bf80-d875-4e60-9c92-ee7bc10190be',
    name: 'Subjugate with Obedience Disks',
    setup: '11 Twists.',
    twist: `Put this Twist under an HQ space as an "Obedience Disk." No space can have two more Obedience Disks than any other space.`,
    evilWins: 'When each HQ space has 2 Obedience Disks.',
    specialRules:
      'To recruit a Hero in the HQ, you must also pay 1 Recruit for each Obedience Disk under it.',
  },
  11
);

export const WORLD_WAR_HULK = new WorldWarHulkScheme(
  {
    id: 'f1b02846-eda3-422d-a5d5-3f42e9f66445',
    name: 'World War Hulk',
    setup:
      '9 Twists. Put three additional Masterminds out of play, "Lurking." Each of the four Masterminds has two random Tactics.',
    twist: `Twist 1-8: Swap the current Mastermind with a random Lurking Mastermind.
Twist 9: Evil Wins!`,
    evilWins: 'When 9 twists revealed',
    specialRules:
      "When you defeat all of a Mastermind's Tactics, KO its face card and a random Lurking Mastermind enters play.",
  },
  9
).overrideDefaultRules({
  additionalDeck: {
    name: 'Lurking',
    deck: {
      numMasterminds: 3,
    },
  },
});

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

import { ARTIFACT, SHARDS } from './keywords';
import { META } from './meta';

class GuardiansOfTheGalaxyScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

class ForgeTheInfinityGauntletScheme extends GuardiansOfTheGalaxyScheme {
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
    const gems = (await import('./villains')).INFINITY_GEMS;

    const gemsPicked = villainStore.getOne(gems.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      gemsPicked,
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

export const FORGE_THE_INFINITY_GAUNTLET = new ForgeTheInfinityGauntletScheme(
  {
    id: '628baaec-c104-437f-ab61-f4526e70ae5f',
    name: 'Forge the Infinity Gauntlet',
    setup: '8 Twists. Always include the Infinity Gems Villain Group.',
    twist: `Starting to your left and going clockwise, the first player with an Infinity Gem Artifact card in play or in their discard pile chooses on of those Infinity Gems to enter the city. Then put a Shard on each Infinity Gem in the city.`,
    evilWins: `When 6 Infinity Gem Villains are in the city and/or the Escape Pile.
    When a player controls 4 Infinity Gem Artifacts, that player is corrupted by power. That player wins, Evil wins, and all other players lose.`,
    keywords: [SHARDS, ARTIFACT],
  },
  8
);

export const INTERGALACTIC_KREE_NEGA_BOMB = new GuardiansOfTheGalaxyScheme(
  {
    id: '129b64e2-e2ec-4662-944c-cfd1688497a4',
    name: 'Intergalactic Kree Nega-Bomb',
    setup: "8 Twists. Make a face down 'Nega-Bomb Deck' of 6 Bystanders.",
    twist:
      "Shuffle this Twist into the Nega-Bomb Deck. Then reveal a random card from that deck. If it's a Bystander, rescue it. If it's a Twist, KO it, KO all Heroes from the HQ, and each player gains a Wound.",
    evilWins: 'When 16 non-grey Heroes are in the KO pile.',
  },
  8
).overrideDefaultRules({
  additionalDeck: {
    name: 'Nega-Bomb Deck',
    deck: {
      numBystanders: 6,
    },
  },
});

class TheKreeSkrullWarScheme extends GuardiansOfTheGalaxyScheme {
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
    const kree = (await import('./villains')).KREE_STARFORCE;
    const gemsPicked = villainStore.getOne(kree.id);

    const skrulls = await (await import('../legendary/villains')).SKRULLS;
    const skrullsPicked = villainStore.getOne(skrulls.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      gemsPicked,
      this.rules[numPlayers].villainDeck.numVillainGroups,
      skrullsPicked
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

export const THE_KREE_SKRULL_WAR = new TheKreeSkrullWarScheme(
  {
    id: 'b0c2aafe-3df2-4fdb-813f-1493eec6e379',
    name: 'The Kree-Skrull War',
    setup: '8 Twists. Always include Kree Starforce and Skrull Villain Groups.',
    twist: `1-7: All Kree and Skrulls escape from the city. Then, if there are more Kree than Skrulls in the Escape Pile, stack this Twist next to the Mastermind as a Kree Conquest. If there are more Skrulls than Kree in the Escape Pile, stack this Twist next to the Villain Deck as a Skrull Conquest.
8: Stack this Twist on the side with the most Conquests.`,
    evilWins: 'When there are 4 Kree Conquests or 4 Skrull Conquests.',
  },
  8
).overrideEachRule((rule, num) => {
  if (num === 1) {
    rule.villainDeck.numVillainGroups = 2;
  }
  return rule;
});

export const UNITE_THE_SHARDS = new GuardiansOfTheGalaxyScheme(
  {
    id: '3a4b7112-91dd-4f8d-9707-a3b447f231b6',
    name: 'Unite the Shards',
    setup:
      '30 Shards in the supply. Twists equal to the number of players plus 5.',
    twist: `Stack this Twist next to the Scheme. Then for each Twist in that stack, the Mastermind gains a Shard.`,
    specialRules:
      "During your turn, any number of times, you may spend 2 Recruit to gain one of the Mastermind's Shards.",
    evilWins:
      'When the Mastermind has 10 Shards or when there are no more Shards in the supply.',
    keywords: [SHARDS],
  },
  6,
  7,
  8,
  9,
  10
).overrideDefaultRules({ numShards: 30 });

import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  AbstractScheme,
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IHenchmen,
  IHero,
  IVillainGroup,
  VillainDeckMinimal,
  IGameSetup,
  NumPlayers,
} from '../../../model';

import { TRAPS } from './keywords';
import { META } from './meta';

class XMenScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

class AlienBroodEncountersScheme extends XMenScheme {
  /**
   * Creates a game setup including The Brood
   */
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
    const brood = (await import('./henchmen')).THE_BROOD;

    // Take the Brood out of the available store
    const broodPicked = henchmenStore.getOne(brood.id);

    partialVillainDeck.henchmen = AbstractScheme.addToDeck(
      partialVillainDeck.henchmen,
      broodPicked,
      this.rules[numPlayers].villainDeck.numHenchmenGroups
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

export const ALIEN_BROOD_ENCOUNTER = new AlienBroodEncountersScheme(
  {
    id: 'af32abef-e791-484a-9014-8e3195095adb',
    name: 'Alien Brood Encounters',
    setup:
      '8 Twists. Add 10 Brood as extra Henchmen. No Bystanders in Villain Deck.',
    twist:
      'The player on your right gains this Twist as a "Brood Infection." When drawn, they KO it and gain 2 Wounds.',
    specialRules:
      'The Villain with the baby gets +4 Attack. If you defeat that Villain, rescue the baby to your Victory Pile (until the next Twist). The baby is worth 6 VP at the end of the game. If a Villain escapes with the baby, stack a Twist next to the Mastermind and return the baby to this Scheme card.',
    evilWins: 'When 3 Villains per player have escaped.',
    keywords: [TRAPS],
  },
  8
)
  .overrideDefaultRules({
    villainDeck: { numBystanders: undefined },
  })
  .overrideEachRule((rule) => {
    rule.villainDeck.numHenchmenGroups++;
    return rule;
  });

export const ANTI_MUTANT_HATRED = new XMenScheme(
  {
    id: '8521af46-2544-4d35-88bd-62233d7bf3b8',
    name: 'Anti-Mutant Hatred',
    setup: '11 Twists. 30 Wounds.',
    specialRules:
      'At the start of your turn, for each Angry Mob in your hand, the player on your right gains a Wound and gains that Angry Mob.',
    twist: 'Put this Twist into your discard pile as an "Angry Mob."',
    evilWins: 'When the Wound Stack or Villain Deck runs out.',
  },
  11
).overrideDefaultRules({ numWounds: 30 });

class TheDarkPhoenixSagaScheme extends XMenScheme {
  /**
   * Create a setup that includes Jean Grey or Phoenix in the villain deck + the HellFire Club
   * @todo add Jean Grey back in
   */
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
    const jeanGrey = (await import('../darkCity/heroes')).JEAN_GREY;

    let pickedHero: IHero;

    if (heroStore.isAvailable(jeanGrey)) {
      pickedHero = heroStore.getOne(jeanGrey.id);
    } else {
      const phoenix = (await import('./heroes')).PHOENIX;
      pickedHero = heroStore.getOne(phoenix.id);
    }

    partialVillainDeck.heroes = AbstractScheme.addToDeck(
      partialVillainDeck.heroes,
      pickedHero,
      this.rules[numPlayers].villainDeck.numHeroes
    );

    const hellfire = (await import('./villains')).HELLFIRE_CLUB;
    const hellFirePicked = villainStore.getOne(hellfire.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      hellFirePicked,
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

export const THE_DARK_PHOENIX_SAGA = new TheDarkPhoenixSagaScheme(
  {
    id: 'a00a7d14-7a67-46e4-ae7a-2045e17262c6',
    name: 'The Dark Phoenix Saga',
    setup:
      '10 Twists. Include Hellfire Club as one of the Villain Groups. Add 14 Jean Grey Hero cards to the Villain Deck.',
    specialRules:
      'Jean Grey cards in the Villain Deck are Villains with attack equal to their cost, "Ambush : Play another Villain card" and "Fight : Gain this as a Hero."',
    twist: `Shuffle all Jean Grey cards from the KO pile and from all players' hands and discard piles into the Villain Deck.`,
    evilWins: 'When 5 Jean Grey cards have escaped.',
  },
  10
).overrideDefaultRules({
  villainDeck: {
    numHeroes: 1,
  },
});

export const HORROR_OF_HORRORS = new XMenScheme(
  {
    id: 'a75aed34-2428-45d0-88c9-b3a39862c148',
    name: 'Horror of Horrors',
    setup: '6 twists',
    twist: 'Twist 1-5: Play a random Horror.',
    evilWins: 'On twist 6',
  },
  6
);

class MutantHuntingSuperSentinelsScheme extends XMenScheme {
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
    const sentinels = (await import('../legendary/henchmen')).SENTINELS;

    const sentinelsPicked = henchmenStore.getOne(sentinels.id);

    partialVillainDeck.henchmen = AbstractScheme.addToDeck(
      partialVillainDeck.henchmen,
      sentinelsPicked,
      this.rules[numPlayers].villainDeck.numHenchmenGroups
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

export const MUTANT_HUNTING_SUPER_SENTINELS =
  new MutantHuntingSuperSentinelsScheme(
    {
      id: 'b1763754-65ad-4898-8a01-07e842052245',
      name: 'Mutant-Hunting Super Sentinels',
      setup:
        '9 Twists. Include 10 Sentinels as extra Henchmen (or substitute another Henchman group.)',
      specialRules:
        'All Sentinels get +1 Attack for each Sentinel Upgrade next to the Scheme.',
      twist: `Stack this Twist next to the Scheme as a "Sentinel Upgrade." Shuffle all Sentinels from players' Victory Piles into the Villain Deck. Play another card from the Villain Deck.`,
      evilWins: 'When 3 Sentinels have Escaped.',
    },
    9
  ).overrideEachRule((rule) => {
    rule.villainDeck.numHenchmenGroups++;
    return rule;
  });

export const NUCLEAR_ARMAGEDDON = new XMenScheme(
  {
    id: '44950273-9893-41ca-b262-e506ec5059b6',
    name: 'Nuclear Armageddon',
    setup: '5 Twists.',
    twist:
      'Destroy the city space closest to the Mastermind. Any Villain There escapes. Put this Twist there.',
    evilWins: 'When the city is destroyed.',
  },
  5
);

export const TELEVISED_DEATHTRAPS_OF_MOJOWORLD = new XMenScheme(
  {
    id: 'dbd34724-305b-4e40-8983-3478c34f443a',
    name: 'Televised Deathtraps of Mojoworld',
    setup: '11 Twists. 6 Wounds per player in Wound Stack.',
    twist: `Stack this Twist next to the Scheme as a "Deathtrap." This turn, you may pay 1 Attack for each Deathtrap stacked there. If you don't, each player gains a Wound.`,
    evilWins: 'When the Wound Stack or Villain Deck runs out.',
  },
  11
).overrideEachRule((rule, num) => {
  rule.numWounds = 6 * num;
  return rule;
});

export const XMEN_DANGER_ROOM_GOES_BERSERK = new XMenScheme(
  {
    id: 'a5038882-127b-4399-b3af-5b9c5eca1bc1',
    name: 'X-Men Danger Room Goes Berserk',
    setup: '8 Twists',
    twist:
      'Trap! By End of Turn : You may pay 2 Recruit. If you do, shuffle this Twist back into the Villain Deck, then play a card from the Villain Deck. Or Suffer : Stack this Twist next to the scheme as an "Airborne Neurotoxin."',
    evilWins: 'When there are 5 Airborne Neurotoxins.',
    keywords: [TRAPS],
  },
  8
);

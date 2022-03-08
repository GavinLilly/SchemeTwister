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
import { MERCS_FOR_MONEY } from '../../teams';

import { REVENGE } from './keywords';
import { META } from './meta';

class DeadpoolScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

class SchemeIncludingDeadpool extends DeadpoolScheme {
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
    const deadpools: IHero[] = heroStore.availableCards.filter((hero) =>
      hero.name.toLowerCase().includes('deadpool')
    );

    if (deadpools.length > 0) {
      const chosenIdx = Math.floor(Math.random() * deadpools.length);
      const chosenDeadpool = heroStore.getOne(
        deadpools.splice(chosenIdx, 1)[0].id
      );

      deadpools.forEach((deadpool) => heroStore.removeCard(deadpool.id));

      partialHeroDeck.heroes = AbstractScheme.addToDeck(
        partialHeroDeck.heroes,
        chosenDeadpool,
        this.rules[numPlayers].heroDeck.numHeroes
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
    } else {
      throw new Error('No Deadpool card is available to be selected');
    }
  }
}

export const DEADPOOL_KILLS_THE_MARVEL_UNIVERSE = new SchemeIncludingDeadpool(
  {
    id: '30ae9e44-e03e-41b8-b67e-6e368a2f271c',
    name: 'Deadpool Kills the Marvel Universe',
    setup:
      'Use Deadpool as one of the Heroes. 2 players Use 4 Heroes total. 1-3 players 6 Twists. 4-5 Players 5 Twists.',
    twist: `Reveal cards from the Hero Deck until you reveal a Deadpool card. KO all the cards you revealed.`,
    evilWins: 'When the Hero Deck runs out.',
  },
  6,
  6,
  6,
  5,
  5
).overrideEachRule((rule, num) => {
  if (num === 2) {
    rule.heroDeck.numHeroes = 4;
  }
  return rule;
});

export const DEADPOOL_WANTS_ACHIMICHANGA = new DeadpoolScheme(
  {
    id: 'de2d8afe-5342-48e8-95de-f0e42390f898',
    name: 'Deadpool Wants a Chimichanga',
    setup: `6 Twists. 12 total Bystanders in the Villain Deck. All Bystanders represent "Chimichangas." (They're Bystanders too). 3-5 players Add a Villain Group.`,
    twist: `Put each Chimichanga from the city into the Escape Pile. Then, each player shuffles a Chimichanga from their Victory Pile back into the Villain Deck. Any player who cannot do so gains a Wound.`,
    evilWins: 'When 6 Chimichangas are in the Escape Pile.',
  },
  6
)
  .overrideDefaultRules({ villainDeck: { numBystanders: 12 } })
  .overrideEachRule((rule, num) => {
    if ([3, 4, 5].includes(num)) {
      rule.villainDeck.numVillainGroups++;
    }
    return rule;
  });

export const DEADPOOL_WRITES_ASCHEME = new SchemeIncludingDeadpool(
  {
    id: '77f7a81e-e83b-4587-b3b3-6733a27cb965',
    name: 'Deadpool Writes a Scheme',
    setup:
      "Hey, writing these doesn't seem so tough. Use the best Hero in the game Deadpool! Add 6 Twists of Lemon, shake vigorously, and I'll make it up as I go.",
    twist: `Twist 1: Everybody draw 1 card. Wait, are these supposed to be bad?
Twist 2: Anyone without a Deadpool in hand is doing it wrong -- discard 2 cards.
Twist 3: Play 3 cards from the Villain Deck. That sounds pretty bad, right?
Twist 4: Each Villain captures 4 Bystanders. Hey, I'm not a balance expert.
Twist 5: Each player gains 5 Wounds. Is that a good number?
Twist 6: Deadpool wins 6 times! Wow, I'm way better at this game than you.`,
    evilWins: 'When 6 twists revealed',
  },
  6
);

class EverybodyHeatesDeadpoolScheme extends DeadpoolScheme {
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
    const mercs = heroStore.availableCards.filter(
      (merc) => merc.team === MERCS_FOR_MONEY
    );

    const merc = randomize(mercs, 1)[0];

    const mercPicked = heroStore.getOne(merc.id);

    partialHeroDeck.heroes = AbstractScheme.addToDeck(
      partialHeroDeck.heroes,
      mercPicked,
      this.rules[numPlayers].heroDeck.numHeroes
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

export const EVERYBODY_HATES_DEADPOOL = new EverybodyHeatesDeadpoolScheme(
  {
    id: '7b2e6a16-23d0-4a66-ba88-bbe0c7b6906d',
    name: 'Everybody Hates Deadpool',
    setup: '6 Twists. Use at least 1 Mercs for Money Hero.',
    twist: `Everyone reveals their hand. Whoever reveals the fewest Mercs for Money cards (or tied for fewest), gains a Wound.`,
    evilWins: 'When 3 Villains per player have escaped.',
    specialRules:
      'All Villains have Revenge for their own Villain Groups. (If they already have Revenge, double it.)',
    keywords: [REVENGE],
  },
  6
);

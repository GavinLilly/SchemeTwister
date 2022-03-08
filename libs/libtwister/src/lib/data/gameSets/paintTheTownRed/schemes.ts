import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  AbstractScheme,
  IHero,
  IVillainGroup,
  IHenchmen,
  HeroDeckMinimal,
  VillainDeckMinimal,
  AdditionalDeckDeckMinimal,
  IGameSetup,
  NumPlayers,
} from '../../../model';

import { WALL_CRAWL } from './keywords';
import { META } from './meta';

class PaintTheTownRedScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

export const THE_CLONE_SAGA = new PaintTheTownRedScheme(
  {
    id: '650a925c-d835-4a42-ac59-9a54e2ee3e08',
    name: 'The Clone Saga',
    setup: '8 Twists.',
    twist: `Each player reveals two non-grey Heroes with the same card name or discards down to 3 cards.`,
    evilWins:
      'When 2 Villains with the same card name have escaped or the Villain Deck runs out',
  },
  8
);

export const INVADE_THE_DAILY_BUGLE_NEWS_HQ = new PaintTheTownRedScheme(
  {
    id: 'bb4f86d6-8002-4bb4-abde-6b0e90ad132a',
    name: 'Invade the Daily Bugle News HQ',
    setup:
      '8 Twists. Add 6 extra Henchmen from a single Henchman Group to the Hero Deck.',
    specialRules: 'You can fight Villains in the HQ.',
    twist: `KO a Hero from the HQ. Put the highest-Attack Villain from the city into that HQ space.`,
    evilWins: 'When there are 5 Villains in the HQ.',
  },
  8
).overrideDefaultRules({ heroDeck: { numHenchmenGroups: 1 } });

class SpliceHumansWithSpiderDnaScheme extends PaintTheTownRedScheme {
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
    const sinister = (await import('./villains')).SINISTER_SIX;

    const sinisterPicked = villainStore.getOne(sinister.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      sinisterPicked,
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

export const SPLICE_HUMANS_WITH_SPIDER_DNA =
  new SpliceHumansWithSpiderDnaScheme(
    {
      id: '89a783c0-006e-49b2-91fd-8c7cf4d314d3',
      name: 'Splice Humans with Spider DNA',
      setup: '8 Twists. Include Sinister Six as one of the Villain Groups.',
      specialRules:
        'Sinister Six Villains get +3 Attack. All Hero cards have Wall-Crawl.',
      twist: `Each player puts a Sinister Six Villain from their Victory Pile on top of the Villain Deck. No matter how many players did so, play a single card from the Villain Deck.`,
      evilWins:
        'When 6 Sinister Six Villains have escaped or the Villain Deck runs out.',
      keywords: [WALL_CRAWL],
    },
    8
  );

export const WEAVE_AWEB_OF_LIES = new PaintTheTownRedScheme(
  {
    id: '395e0e98-ad58-48e9-aa4a-5d20024ab848',
    name: 'Weave a Web of Lies',
    setup: '7 twists',
    twist: `Stack this Twist next to the Mastermind.`,
    specialRules:
      "Whenever you defeat a Villain, you may pay 1 Recruit. If you do, rescue a Bystander. You can't fight the Mastermind unless you have a Bystander in your Victory Pile for each Twist next to the Mastermind.",
    evilWins: 'When there are 7 twists next to the Mastermind',
  },
  7
);

import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  AbstractScheme,
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  IHenchmen,
  IHero,
  IKeyword,
  IVillainGroup,
  VillainDeckMinimal,
  NumPlayers,
} from '../../../model';
import { X_MEN } from '../../teams';

import { DOUBLE_SIDED_TRANSFORMING_SCHEMES } from './keywords';
import { META } from './meta';

class RevelationsScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
  public readonly keywords: IKeyword[] = [DOUBLE_SIDED_TRANSFORMING_SCHEMES];
}

export const EARTHQUAKE_DRAINS_THE_OCEAN = new RevelationsScheme(
  {
    id: '16800076-996c-4cea-89f9-4d5bb6969557',
    name: 'Earthquake Drains the Ocean',
    setup: '11 Twists. Add an extra Villain Group.',
    twist: `The tide rushes in. This Scheme Transforms.`,
    evilWins:
      'When 3 Villains per player have escaped or the Villain Deck runs out.',
    specialRules:
      'The Low Tide, Bridge, and Streets city spaces no longer exist. The city has 3 spaces total. Put this Scheme on the Streets to mark the edge of the city. Villains in destroyed city spaces escape, starting from the left.',
  },
  11
).overrideEachRule((rule) => {
  rule.villainDeck.numVillainGroups++;
  return rule;
});

class HouseOfMScheme extends RevelationsScheme {
  public async getSetup(
    numPlayers: NumPlayers,
    selectedMastermind: AbstractMastermind,
    heroStore: MultiCardStore<IHero>,
    villainStore: MultiCardStore<IVillainGroup>,
    henchmenStore: MultiCardStore<IHenchmen>,
    mastermindStore: MultiCardStore<AbstractMastermind>,
    advancedSolo?: boolean,
    partialHeroDeck: HeroDeckMinimal = {},
    partialVillainDeck: VillainDeckMinimal = {},
    partialAdditionalDeck?: AdditionalDeckDeckMinimal
  ): Promise<IGameSetup> {
    const witch = (await import('./heroes')).SCARLET_WITCH;

    const witchPicked = heroStore.getOne(witch.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.heroes,
      witchPicked,
      this.rules[numPlayers].villainDeck.numVillainGroups
    );

    const xMenHeroes = heroStore.getManyRandom(
      4,
      (hero) => hero.team === X_MEN
    );
    const otherHeroes = heroStore.getManyRandom(
      2,
      (hero) => hero.team !== X_MEN
    );

    partialHeroDeck.heroes = AbstractScheme.addToDeck(
      partialHeroDeck.heroes,
      otherHeroes[0],
      this.rules[numPlayers].heroDeck.numHeroes,
      otherHeroes[1],
      ...xMenHeroes
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

export const HOUSE_OF_M = new HouseOfMScheme(
  {
    id: '392eb5bd-261f-4bcd-a9bc-77137c3ae0e1',
    name: 'House of M',
    setup:
      '8 Twists. Hero Deck is 4 X-Men Heroes and 2 non-X-Men Heroes. (Or substitute another team for all X-Men icons on both sides.) Add 14 Scarlet Witch Hero cards to the Villain Deck.',
    twist: `KO all non-X-Men Heroes from the HQ. If there are at least 2 Scarlet Witch cards in the city, this Scheme `,
    evilWins:
      'When the number of non-grey Heroes in the KO pile is ten plus double the number of players.',
    specialRules:
      'Each Scarlet Witch in the city is a Villain with Attack equal to its cost +3. If you fight one, gain it as a Hero.',
  },
  8
).overrideDefaultRules({
  heroDeck: {
    numHeroes: 6,
  },
  villainDeck: {
    numHeroes: 1,
  },
});

export const SECRET_HYDRA_CORRUPTION = new RevelationsScheme(
  {
    id: 'ba1c8117-bb39-48d6-ad47-09ead82f402c',
    name: 'Secret HYDRA Corruption',
    setup:
      '30 Officers in the S.H.I.E.L.D. Officer stack. 1 player 7 Twists. 2-3 players 9 Twists. 4-5 players 11 Twists.',
    twist: `For each Twist in the KO pile (including this one), put a card from the S.H.I.E.L.D. Officer stack next to this Scheme. Then this Scheme Transforms.`,
    evilWins:
      'When there are 15 Officers next to this Scheme or the S.H.I.E.L.D. Officer Stack runs out.',
    specialRules:
      'Officers stacked next to this Scheme are "Hydra Sympathizers." You may pay 3 Recruit to have the player of your choice gain one as a Hero.',
  },
  7,
  9,
  9,
  11,
  11
).overrideDefaultRules({ numShieldOfficers: 30 });

export const THE_KORVAC_SAGA = new RevelationsScheme(
  {
    id: '2f845b77-435f-472e-9ed9-c501e08ff62d',
    name: 'The Korvac Saga',
    setup: '8 Twists.',
    twist: `Each player must discard down to four cards or KO a Bystander from their Victory Pile to "search for the Korvac Entity." This Scheme Transforms.
Twist: 2,4,6: Each player discards an Avengers Hero or gains a Wound. This Scheme Transforms.
Twist 8: Evil Wins!`,
    evilWins: 'When 8 twists revealed',
    specialRules:
      'This Scheme counts as a 19 Attack "Korvac" Villain worth 9VP. If you defeat Korvac, KO the Mastermind and all its Tactics.',
  },
  8
);

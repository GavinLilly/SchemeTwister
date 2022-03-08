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
import { HeroClass } from '../../enums';

import { META } from './meta';

class ChampionsScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

class ClashOfTheMonstersUnleashedScheme extends ChampionsScheme {
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
    const monsters = (await import('./villains')).MONSTERS_UNLEASHED;

    const monstersPicked = villainStore.getOne(monsters.id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      monstersPicked,
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

export const CLASH_OF_THE_MONSTERS_UNLEASHED =
  new ClashOfTheMonstersUnleashedScheme(
    {
      id: '0f59ccb0-e32a-4e5a-83b6-826dbc2a9640',
      name: 'Clash of the Monsters Unleashed',
      setup:
        '10 Twists. 6 Wounds per player in the Wound Stack. Shuffle 8 Monsters Unleashed Villains into a face-down "Monster Pit" deck.',
      twist: `Twist 3-10: Each player chooses a Villain from their Victory Pile as their "Gladiator." Then the top card of the Monster Pit enteres the city. Each player whose Gladiator has a lower printed Attack than that Monster gains a Wound.`,
      evilWins: 'When the Wound Stack or Monster Pit Deck runs out.',
    },
    10
  )
    .overrideDefaultRules({
      additionalDeck: {
        name: 'Monster Pit',
        deck: {
          numVillainGroups: 1,
        },
      },
    })
    .overrideEachRule((rule, num) => {
      rule.numWounds = num * 6;
      return rule;
    });

export const DIVIDE_AND_CONQUER = new ChampionsScheme(
  {
    id: '4cd49303-2726-452c-9f19-c0241e521e95',
    name: 'Divide and Conquer',
    setup: `8 Twists. 7 Heroes. Sort the Hero Deck by Hero Class. ${HeroClass.STRENGTH} ${HeroClass.INSTINCT} ${HeroClass.COVERT} ${HeroClass.TECH} ${HeroClass.RANGED} (If a card has multiple Classes, break ties at random.). Put these 5 smaller, shuffled Hero Decks beneath the 5 HQ Spaces.`,
    twist: `Twist 1-3: KO all Heroes in the HQ
Twist 4-8: KO one of the Hero Decks.`,
    evilWins: 'When all Hero Decks are gone.',
    specialRules:
      'Whenever an HQ Space is empty, fill it with the top card of the Hero Deck below that space.',
  },
  8
).overrideDefaultRules({
  heroDeck: {
    numHeroes: 7,
  },
});

export const HYPNOTIZE_EVERY_HUMAN = new ChampionsScheme(
  {
    id: 'c1aec589-0a31-4fe4-827a-e34b7415ffa6',
    name: 'Hypnotize Every Human',
    setup:
      '8 Twists. Add another Henchman Villain Group. No Bystanders in the Villain Deck.',
    twist: `Twist 1-6: Put a Bystander from the Bystander Stack above each city space as a facedown 2 Attack "Hypno-Thrall" Villain. They don't move. When you fight one, rescue it as a Bystander. You can't fight a Villain in a city space that has any Hypno-Thralls above it.
Twist 7-8: Each player puts a Villain from their Victory Pile into the Escape pile.`,
    evilWins: 'When 8 Villains are in the Escape pile.',
  },
  8
)
  .overrideDefaultRules({
    villainDeck: {
      numBystanders: undefined,
    },
  })
  .overrideEachRule((rule) => {
    rule.villainDeck.numHenchmenGroups++;
    return rule;
  });

export const STEAL_ALL_OXYGEN_ON_EARTH = new ChampionsScheme(
  {
    id: '4b1a8d31-2967-4191-9f94-e717df20d05f',
    name: 'Steal All Oxygen on Earth',
    setup: '8 Twists. The "Oxygen Level" starts at 8.',
    twist: `Stack this Twist next to the Scheme. The Oxygen Level decreases by 1. Then KO each Hero from the HQ whose cost is greater than the Oxygen Level.`,
    evilWins: "When 20 non-grey Heroes are KO'd.",
  },
  8
);

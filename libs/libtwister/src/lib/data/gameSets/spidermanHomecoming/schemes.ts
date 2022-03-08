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
import { SPIDER_FRIENDS } from '../../teams';

import { STRIKER } from './keywords';
import { META } from './meta';

class SpiderManHomecomingScheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

class DistractTheHeroScheme extends SpiderManHomecomingScheme {
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
    const spiderFriend = heroStore.getOneRandom(
      (hero) => hero.team === SPIDER_FRIENDS
    );

    partialHeroDeck.heroes = AbstractScheme.addToDeck(
      partialHeroDeck.heroes,
      spiderFriend,
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

export const DISTRACT_THE_HERO = new DistractTheHeroScheme(
  {
    id: '764951d6-5b1c-4bf4-985a-c5804ea9b32e',
    name: 'Distract the Hero',
    setup: '8 Twists. Use at least one Spider Friends Hero.',
    twist: `If you get any Victory Points this turn, put this Twist on the bottom of the Villain Deck. Otherwise, stack this Twist next to the Scheme as a "Villainous Interruption."`,
    evilWins: 'When there have been 5 Villainous Interruptions.',
  },
  8
);

export const EXPLOSION_AT_THE_WASHINGTON_MONUMENT =
  new SpiderManHomecomingScheme(
    {
      id: 'aae82a96-6b45-4c36-b9bd-cc8ea15a2947',
      name: 'Explosion at the Washington Monument',
      setup:
        '8 Twists. Shuffle 18 Bystanders and 14 Wounds, then deal them evenly into eight decks. Put these decks in a row, as Floors of the Washington Monument.',
      twist: `KO the topmost Floor of the Washington Monument. You gain one of the Wounds KO'd this way.`,
      evilWins:
        "When 10 Bystanders are in the KO pile and/or Escape Pile, or all Floors are KO'd.",
      specialRules:
        "Whenever you fight a Villain, you may reveal any face-down card from any Floor. If it's a Bystander, rescue it. If it's a Wound, put it back face-up.",
    },
    8
  ).overrideDefaultRules({
    additionalDeck: {
      name: 'Floors of the Washington Monument',
      deck: {
        numBystanders: 18,
        numWounds: 14,
      },
      instruction: 'Deal them evenly into eight decks',
    },
  });

export const FERRY_DISASTER = new SpiderManHomecomingScheme(
  {
    id: 'f5cde443-9109-436c-9393-082ab306d428',
    name: 'Ferry Disaster',
    setup: '9 Twists. Put the Bystander Stack above the Sewers as the "Ferry."',
    twist: `Twist 1-4: If there's a Villain in the city space below the Ferry, KO 2 Bystanders from the Ferry. Whether you KO'd or not, the Ferry moves one space left.
Twist 5-8: Same effect, but it moves right.
Twist 9: KO half the Bystanders from the Bystander deck, rounding up.`,
    evilWins: 'When 7 Bystanders are in the KO pile and/or Escape Pile.',
  },
  9
);

export const SCAVENGE_ALIEN_WEAPONRY = new SpiderManHomecomingScheme(
  {
    id: 'b28cb5ca-715f-4a3f-acf8-49d583131cc5',
    name: 'Scavenge Alien Weaponry',
    setup: '7 Twists. Add an extra Henchmen Group of 10 cards as "Smugglers."',
    twist: `Play two cards from the Villain Deck.`,
    evilWins:
      'When 3 Villains per player have escaped or the Villain Deck runs out.',
    specialRules: 'Smugglers have Striker.',
    keywords: [STRIKER],
  },
  7
).overrideEachRule((rule) => {
  rule.villainDeck.numHenchmenGroups++;
  return rule;
});

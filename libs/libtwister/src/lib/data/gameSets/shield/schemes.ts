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
import { HeroClass } from '../../enums';

import { HYDRA_LEVEL, UNDERCOVER } from './keywords';
import { META } from './meta';

class ShieldScheme extends AbstractScheme {
  gameSetId = META.id;
}

class ShieldVsHydraWarScheme extends ShieldScheme {
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
    // Get both Shield villains...
    const shieldVillains = Object.values(await import('./villains'));

    // ...pick one...
    const villain = randomize(shieldVillains, 1)[0];
    const villainPicked = villainStore.getOne(villain.id);

    // ...get the index of the chosen one...
    const chosenIdx = shieldVillains.indexOf(villain);

    // ...remove the chosen card from the array and then remove the remaining
    shieldVillains.splice(chosenIdx, 1);
    // one from the villain store
    villainStore.removeCard(shieldVillains[0].id);

    partialVillainDeck.villains = AbstractScheme.addToDeck(
      partialVillainDeck.villains,
      villainPicked,
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

export const SHIELD_VS_HYDRA_WAR = new ShieldVsHydraWarScheme(
  {
    id: '05c59c1a-fa4e-4b84-a8f8-282e3d882454',
    name: 'S.H.I.E.L.D. vs. HYDRA War',
    setup:
      '7 Twists. Include either the "Hydra Elite" or "A.I.M., Hydra Offshoot" Villain Group, but not both.',
    twist: `Each player puts a card from the S.H.I.E.L.D. Officer Stack face up next to the Scheme as a 3 Attack "Double Agent" Villain. If any Double Agents were already there, put one into the Escape Pile and put the rest on the bottom of the S.H.I.E.L.D. Officer Stack. You can fight any Double Agent next to the Scheme to gain it or send it Undercover.`,
    evilWins: 'When the Hydra Level is 11.',
    keywords: [UNDERCOVER, HYDRA_LEVEL],
  },
  7
);

export const HAIL_HYDRA = new ShieldScheme(
  {
    id: 'bf076369-d6e6-4b07-bb33-da2a7d476f14',
    name: 'Hail Hydra',
    setup: '11 twists.',
    twist: `Twist 1-9: Choose one:
  -Say "I'd never abandon S.H.I.E.L.D.", and you can't fight this turn.
  -Or whisper "Hail Hydra", you can't recruit this turn, and a Villain captures a Bystander.
Twist 10: Evil Wins!`,
    evilWins: 'On 10th twist',
  },
  11
);

export const HYDRA_HELICARRIERS_HUNT_HEROES = new ShieldScheme(
  {
    id: 'ac946f50-a8c6-4d30-9df0-168a2bf240c1',
    name: 'Hydra Helicarriers Hunt Heroes',
    setup: '8 Twists. Add an extra Hero.',
    twist: `Stack this Twist next to the Scheme. Then for each Twist stacked there, choose a different Hero Class (${HeroClass.STRENGTH}, ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH}, ${HeroClass.RANGED}), to a maximum of 5. KO each Hero from the HQ that has any of those Hero Classes.`,
    evilWins: 'When there are 18 non-grey Heroes in the KO pile.',
  },
  8
).overrideEachRule((rule) => {
  rule.heroDeck.numHeroes++;
  return rule;
});

export const SECRET_EMPIRE_OF_BETRAYAL = new ShieldScheme(
  {
    id: 'f14ce01a-5fc7-4866-8751-e70f6982dec9',
    name: 'Secret Empire of Betrayal',
    setup:
      '11 Twists. Randomly pick 5 cards that cost 5 or less from an additional Hero. Shuffle them to form a "Dark Loyalty" deck.',
    twist: `Shuffle this Twist into the Dark Loyalty deck as a "Vicious Betrayal." Then reveal the top card of that deck. If it's a Hero, gain it. If it's a Vicious Betrayal, put it next to the Scheme and each other player gains a Wound.`,
    evilWins: 'When there are 6 Vicious Betrayals next to the Scheme.',
  },
  11
).overrideDefaultRules({
  additionalDeck: {
    name: 'Dark Loyalty',
    deck: {
      numHeroes: 1,
    },
  },
});

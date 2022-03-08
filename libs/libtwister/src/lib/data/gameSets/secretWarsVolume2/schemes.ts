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

import { CHARGE, CIRCLE_OF_KUNG_FU, FATEFUL_RESURRECTION } from './keywords';
import { META } from './meta';

class SecretWarsVolume2Scheme extends AbstractScheme {
  public readonly gameSetId = META.id;
}

export const DEADLANDS_HORDES_CHARGE_THE_WALL = new SecretWarsVolume2Scheme(
  {
    id: 'ad8cc356-fe6f-4876-ab64-5703a0914b4c',
    name: 'Deadlands Hordes Charge the Wall',
    setup: '8 Twists. Add an extra Villain Group.',
    twist: `Each Villain simultaneously charges two spaces. Play another card from the Villain Deck.`,
    evilWins:
      'When the number of escaped Villains equals the number of players plus 6.',
    keywords: [CHARGE],
  },
  8
).overrideEachRule((rule) => {
  rule.villainDeck.numVillainGroups++;
  return rule;
});

export const ENTHRONE_THE_BARONS_OF_BATTLEWORLD = new SecretWarsVolume2Scheme(
  {
    id: '7b11db3d-9aed-4e6c-907b-df7717ea82b4',
    name: 'Enthrone the Barons of Battleworld',
    setup: '8 Twists.',
    twist: `The Villain in the city or Escape Pile with the highest printed Attack ascends to become a new Mastermind. It gets +2 Attack. It gains the ability "Master Strike: Each Player discards a card with cost equal to this Mastermind's printed VP." (Keep them separate from any Villains who ascend through Escape effects.)
Twist 8: The Villain in each player's Victory Pile with the highest printed Attack ascends the same way.`,
    evilWins: 'When there are 6 Masterminds.',
  },
  8
);

export const THE_FOUNTAIN_OF_ETERNAL_LIFE = new SecretWarsVolume2Scheme(
  {
    id: '996bc05f-5c6a-4758-a82d-899068b2777f',
    name: 'The Fountain of Eternal Life',
    setup: '8 Twists. (1 player 4 Twists.)',
    twist: `A Villain from your Victory Pile enters the Sewers. Put this Twist on the bottom of the Villain Deck.`,
    evilWins:
      'When the number of escaped Villains is 3 times the number of players.',
    specialRules:
      'All Villains and Mastermind Tactics have "Fight: Fateful Resurrection."',
    keywords: [FATEFUL_RESURRECTION],
  },
  4,
  8,
  8,
  8,
  8
);

export const THE_GODEMPEROR_OF_BATTLEWORLD = new SecretWarsVolume2Scheme(
  {
    id: '271bd2be-2947-4f50-8249-ac33742cb62a',
    name: 'The God-Emperor of Battleworld',
    setup: '8 Twists.',
    twist: `Twist 1: This Scheme ascends to become a new 9-Attack "God-Emperor" Mastermind worth 9 VP. It has "Master Strike: Each player with exactly six cards in hand reveals a ${HeroClass.TECH} Hero or puts two cards from their hand on top of their deck."
Twist 2-6: Stack this Twist next to the Scheme. The God-Emperor gets another +2 Attack.
Twist 7: If the God-Emperor lives, it KOs all other Masterminds.
Twist 8: Evil wins! (If any Mastermind still lives.)`,
    evilWins: 'When 8 twists revealed (If any Mastermind still lives.)',
  },
  8
);

class TheMarkOfKhonshuScheme extends SecretWarsVolume2Scheme {
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
    const khonshu = (await import('./henchmen')).KHONSHU_GUARDIANS;

    const khonshuPicked = henchmenStore.getOne(khonshu.id);

    partialVillainDeck.henchmen = AbstractScheme.addToDeck(
      partialVillainDeck.henchmen,
      khonshuPicked,
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

export const THE_MARK_OF_KHONSHU = new TheMarkOfKhonshuScheme(
  {
    id: '2f35b369-3dc6-4d1a-901f-1f94dadaae38',
    name: 'The Mark of Khonshu',
    setup:
      '10 Twists. Always include Khonshu Guardians. Add all fourteen cards for an extra Hero to the Villain Deck.',
    twist: `Play two cards from the Villain Deck.`,
    evilWins: 'When 7 Khonshu Guardians escape.',
    specialRules:
      'Heroes in the Villain Deck are "Khonshu Guardian" Villains with Attack equal to their printed cost. While in the Sewers, Rooftops, or Bridge, they are in "wolf form" and have double their Attack. When you defeat one, gain it as a Hero.',
  },
  10
).overrideDefaultRules({ villainDeck: { numHeroes: 1 } });

export const MASTER_THE_MYSTERIES_OF_KUNGFU = new SecretWarsVolume2Scheme(
  {
    id: 'b4f89a6a-502f-46d0-991b-1b7535c5459f',
    name: 'Master the Mysteries of Kung-Fu',
    setup: '8 Twists.',
    twist: `Stack this Twist next to the Scheme.`,
    evilWins:
      'When the number of escaped Villains is double the number of players.',
    specialRules:
      'Villains and the Mastermind have the Circle of Kung-Fu matching the number of Twists stacked here.',
    keywords: [CIRCLE_OF_KUNG_FU],
  },
  8
);

export const SECRET_WARS = new SecretWarsVolume2Scheme(
  {
    id: '11162a49-a687-4877-8283-8f59f26c7522',
    name: 'Secret Wars',
    setup: '8 Twists.',
    twist: `Twists 1-3: Add another random Mastermind to the game with one Tactic.
Twist 8: Evil wins!`,
    evilWins: 'When 8 twists revealed',
  },
  8
).overrideDefaultRules({
  additionalDeck: {
    name: 'Additional Masterminds',
    deck: {
      numMasterminds: 3,
    },
  },
});

export const SINISTER_AMBITIONS = new SecretWarsVolume2Scheme(
  {
    id: '639fd392-01f2-466c-9be2-a8092be34e7f',
    name: 'Sinister Ambitions',
    setup: '6 Twists. Add 10 random Ambition cards to the Villain Deck.',
    twist: `Twist 1-5: Stack this Twist next to the Scheme. Play another card from the Villain Deck.
Twist 6: Each Ambition Villain in the city escapes.`,
    evilWins: 'When 4 Ambition Villains escape.',
    specialRules:
      'Ambition cards are Villains with their printed Attack. Add +1 Attack for each Twist stacked next to the Scheme. They are worth 4 VP. Whenever an Ambition Villain escapes, do its Ambition effect.',
  },
  6
).overrideDefaultRules({ villainDeck: { numAmbitions: 10 } });

import { GameSets } from '../gamesets';
import { Noir as NoirKeywords } from '../keywords';

import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'FIND_THE_SPLIT_PERSONALITY_KILLER'
  | 'SILENCE_THE_WITNESSES'
  | 'FIVE_FAMILIES_OF_CRIME'
  | 'HIDDEN_HEART_OF_DARKNESS';

export const Noir: Record<SchemeNames, IScheme> = {
  FIND_THE_SPLIT_PERSONALITY_KILLER: new Scheme({
    id: '81435cb5-a05b-4cdd-8d8b-b602a7ce3a53',
    name: 'Find the Split Personality Killer',
    setup: '8 Twists.',
    twist: `Twist 1-5: Shuffle 3 Bystanders from the Bystander Stack and the top card of the Hero Deck face down next to this Scheme as a deck of "Murder Suspects."
Twist 6: Each player writes down their guess for which Hero Name is the Split Personality Killer. Reveal the entire Murder Suspects Deck. The Hero Name with the most cards in the Murder Suspect Deck (or tied for most) is the Split Personality Killer. Each player who guessed right wins. All other players lose.`,
    evilWins: '',
    specialRules:
      'Whenever you defeat a Villain, you may pay 1 Attack extra to Investigate the Murder Suspects for a Bystander and rescue it.',
    gameSet: GameSets.NOIR,
  }),
  SILENCE_THE_WITNESSES: new Scheme(
    {
      id: '6bfc956d-2ebc-4fcf-9716-2a00b0c1b0c5',
      name: 'Silence the Witnesses',
      setup: '6 Twists.',
      twist: `This Scheme captures 3 Hidden Witnesses. If it already had any Hidden Witnesses, put those into the Escape Pile.`,
      evilWins: 'When 6 Bystanders are in the Escape Pile.',
      gameSet: GameSets.NOIR,
      keywords: [NoirKeywords.Investigate, NoirKeywords.HiddenWitness],
    },
    {
      villainDeck: {
        numTwists: 6,
      },
    }
  ),
  FIVE_FAMILIES_OF_CRIME: new Scheme(
    {
      id: 'f6393acd-4446-4278-83d0-e147d768e927',
      name: 'Five Families of Crime',
      setup:
        '8 Twists. Add two extra Villain Groups. Split the Villain Deck into 5 shuffled decks, one above each city space.',
      twist: `Play two cards from a Villain Deck.`,
      evilWins: 'When 8 Villains escape or all Villain Decks run out.',
      specialRules:
        'Each Villain Deck uses its own city of one city space. Each turn, you choose which Villain Deck plays a card.',
      gameSet: GameSets.NOIR,
    },
    undefined,
    {
      1: {
        villainDeck: {
          numVillainGroups: 3,
        },
      },
      2: {
        villainDeck: {
          numVillainGroups: 4,
        },
      },
      3: {
        villainDeck: {
          numVillainGroups: 5,
        },
      },
      4: {
        villainDeck: {
          numVillainGroups: 5,
        },
      },
      5: {
        villainDeck: {
          numVillainGroups: 6,
        },
      },
    }
  ),
  HIDDEN_HEART_OF_DARKNESS: new Scheme({
    id: '97c28f0b-ab2d-4f2c-864f-3743327324a6',
    name: 'Hidden Heart of Darkness',
    setup:
      '8 Twists. Shuffle the Mastermind Tactics into the Villain Deck as Villains.',
    twist: `Each player shuffles a Tactic from their victory pile into the Villain Deck. Any player who did so draws two cards. Then, Investigate the Villain Deck for a Tactic and that Tactic enters the city. Reveal all the cards you Investigated.`,
    evilWins: 'When 2 Tactics escape.',
    specialRules:
      'If there are no Tactics in the city, you can win the game by fighting the Mastermind card.',
    gameSet: GameSets.NOIR,
    keywords: [NoirKeywords.Investigate],
  }),
};

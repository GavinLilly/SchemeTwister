import { GameSets } from '../gamesets';
import { IScheme, Scheme } from './scheme';

type SchemeNames =
  | 'ASGARDIAN_TEST_OF_WORTH'
  | 'THE_DARK_WORLD_OF_SVARTALFHEIM'
  | 'RAGNAROK'
  | 'WAR_OF_THE_FROST_GIANTS';

export const HeroesOfAsgard: Record<SchemeNames, IScheme> = {
  ASGARDIAN_TEST_OF_WORTH: new Scheme(
    {
      id: '759e3b29-e1aa-4d30-b715-3e02192f35a9',
      name: 'Asgardian Test of Worth',
      setup: '11 twists.',
      twist: `1-7: Each player who is not Worthy discards a card. Then, if at least half the players (round up) are not Worthy, put this Twist next to the Scheme as a "Moral Failing."
8-11: Put this Twist next to the Scheme as a "Moral Failing."`,
      evilWins: 'When there are 5 Moral Failings.',
      gameSet: GameSets.HEROES_OF_ASGARD,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
    }
  ),
  THE_DARK_WORLD_OF_SVARTALFHEIM: new Scheme(
    {
      id: '00502896-c385-4f84-8097-880804ef203b',
      name: 'The Dark World of Svartalfheim',
      setup: '10 twists.',
      twist:
        'Put this Twist next to a city space of HQ space that doesn\'t already have one, as "Eternal Darkness."',
      specialRules:
        'Villains in city spaces with Eternal Darkness get +1 Attack. To recruit a Hero in an HQ space with Eternal Darkness, you must pay an extra 1 Recruit.',
      evilWins:
        'When all city spaces or all HQ spaces are covered in Eternal Darkness.',
      gameSet: GameSets.HEROES_OF_ASGARD,
    },
    {
      villainDeck: {
        numTwists: 10,
      },
    }
  ),
  RAGNAROK: new Scheme(
    {
      id: '310db9df-a36f-40ed-a242-c317eadd49ed',
      name: 'Ragnarok, Twilight of the Gods',
      setup: '11 Twists.',
      twist: `Choose a Villain from your Victory Pile worth at least 2VP to enter the city. Then, if the total Attack of Villains in the city is at least as high as the Guardian Attack listed below, put this Twist next to the Scheme as a "Guardian Defeated."
Twist 1: Balder, 11 Attack
Twist 2: Odin, 24 Attack
Twist 3: Vidar, 19 Attack
Twist 4: Tyr, 16 Attack
Twist 5: Heimdall, 12 Attack
Twist 6: Frey, 7 Attack
Twist 7: Frigga, 8 Attack
Twist 8-11: Warriors of Valhalla, 6 Attack`,
      evilWins: 'When there are 5 Guardians Defeated.',
      gameSet: GameSets.HEROES_OF_ASGARD,
    },
    {
      villainDeck: {
        numTwists: 11,
      },
    }
  ),
  WAR_OF_THE_FROST_GIANTS: new Scheme(
    {
      id: 'ffb26f7e-0a28-4247-9380-415acc0372a3',
      name: 'War of the Frost Giants',
      setup: '9 twists.',
      twist: `Twist 1-7: This Twist enters the city as a "Frost Giant Invader" Villain worth 6VP with 6 Attack and the ability "If you are not Worthy, this gets +4 Attack."
Twist 8-9: Same effect, then a Frost Giant Invader from each player's Victory Pile enters the city.`,
      evilWins:
        'When there are 5 Frost Giant Invaders in the city and/or Escape Pile.',
      gameSet: GameSets.HEROES_OF_ASGARD,
    },
    {
      villainDeck: {
        numTwists: 9,
      },
    }
  ),
};

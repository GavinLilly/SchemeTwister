import { DeepPartial } from '../deepPartial.type';
import { GameSets } from '../gamesets';
import { IRules, numPlayers } from './rules.interface';
import { Scheme, SchemeParams } from './scheme';

const schemeParams: SchemeParams = {
  id: 'fea3e538-07a6-4918-9434-8509211c3a4a',
  name: 'Test Scheme',
  setup: 'Test setup',
  twist: 'Test twist',
  gameSet: GameSets.LEGENDARY,
  evilWins: 'Test evil wins',
};

const defaultRules = {
  2: {
    heroDeck: {
      numHeroes: 5,
    },
    villainDeck: {
      numVillainGroups: 2,
      numHenchmenGroups: 1,
      numBystanders: 2,
      numTwists: 8,
    },
  },
  3: {
    heroDeck: {
      numHeroes: 5,
    },
    villainDeck: {
      numVillainGroups: 3,
      numHenchmenGroups: 1,
      numBystanders: 8,
      numTwists: 8,
    },
  },
  4: {
    heroDeck: {
      numHeroes: 5,
    },
    villainDeck: {
      numVillainGroups: 3,
      numHenchmenGroups: 2,
      numBystanders: 8,
      numTwists: 8,
    },
  },
  5: {
    heroDeck: {
      numHeroes: 6,
    },
    villainDeck: {
      numVillainGroups: 4,
      numHenchmenGroups: 2,
      numBystanders: 12,
      numTwists: 8,
    },
  },
};

describe('Scheme with no overrides', () => {
  const testScheme: Scheme = new Scheme(schemeParams);

  it('should create', () => expect(testScheme).toBeTruthy());

  it('should have the default rules', () =>
    expect(testScheme.rules).toEqual(defaultRules));
});

describe('Scheme with specific rule overrides', () => {
  const override: DeepPartial<IRules> = {
    2: {
      heroDeck: {
        numHeroes: 1,
      },
    },
    3: {
      heroDeck: {
        numHeroes: 2,
      },
    },
    4: {
      heroDeck: {
        numHeroes: 3,
      },
    },
    5: {
      heroDeck: {
        numHeroes: 4,
      },
    },
  };
  const testScheme: Scheme = new Scheme(schemeParams, undefined, override);

  it('should create', () => expect(testScheme).toBeTruthy());

  it('should have the defined rules', () => {
    expect(testScheme.rules[2].heroDeck.numHeroes).toEqual(1);
    expect(testScheme.rules[3].heroDeck.numHeroes).toEqual(2);
    expect(testScheme.rules[4].heroDeck.numHeroes).toEqual(3);
    expect(testScheme.rules[5].heroDeck.numHeroes).toEqual(4);
  });

  it('should have the default rules for non-overridden rules', () => {
    expect(testScheme.rules[2].villainDeck.numVillainGroups).toEqual(
      defaultRules[2].villainDeck.numVillainGroups
    );
  });
});

describe('Scheme with override for all number of players', () => {
  const testScheme: Scheme = new Scheme(schemeParams, {
    villainDeck: {
      numTwists: 11,
    },
  });

  it('should create', () => expect(testScheme).toBeTruthy());

  it('should have the defined rules', () => {
    const players: numPlayers[] = [2, 3, 4, 5];
    players.forEach((num) => {
      expect(testScheme.rules[num].villainDeck.numTwists).toEqual(11);
    });
  });

  it('should have the default rules for non-overridden rules', () => {
    expect(testScheme.rules[2].villainDeck.numVillainGroups).toEqual(
      defaultRules[2].villainDeck.numVillainGroups
    );
  });
});

describe('Scheme with override for all number of players and specific', () => {
  const override: DeepPartial<IRules> = {
    2: {
      heroDeck: {
        numHeroes: 1,
      },
    },
    3: {
      heroDeck: {
        numHeroes: 2,
      },
    },
    4: {
      heroDeck: {
        numHeroes: 3,
      },
    },
    5: {
      heroDeck: {
        numHeroes: 4,
      },
    },
  };

  const testScheme: Scheme = new Scheme(
    schemeParams,
    {
      villainDeck: {
        numTwists: 11,
      },
    },
    override
  );

  it('should create', () => expect(testScheme).toBeTruthy());

  it('should have the defined rules', () => {
    const players: numPlayers[] = [2, 3, 4, 5];
    players.forEach((num) => {
      expect(testScheme.rules[num].villainDeck.numTwists).toEqual(11);
    });

    expect(testScheme.rules[2].heroDeck.numHeroes).toEqual(1);
    expect(testScheme.rules[3].heroDeck.numHeroes).toEqual(2);
    expect(testScheme.rules[4].heroDeck.numHeroes).toEqual(3);
    expect(testScheme.rules[5].heroDeck.numHeroes).toEqual(4);
  });

  it('should have the default rules for non-overridden rules', () => {
    expect(testScheme.rules[2].villainDeck.numVillainGroups).toEqual(
      defaultRules[2].villainDeck.numVillainGroups
    );
  });
});

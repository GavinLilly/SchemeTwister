import { CardType } from '../enums';
import { GameSets } from '../gamesets';

import { ICard } from './card.interface';
import { CardSet } from './cardSet';

class DummySet extends CardSet<ICard> {
  public static readonly dummyDataLegendary: ICard[] = [
    {
      id: '4c3f2410-272f-46d1-9a7f-2c7c4073c5f6',
      name: 'LEG1',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
    },
    {
      id: 'e9ec5bb3-49dc-4e1d-abf1-976b736fd93a',
      name: 'LEG2',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
    },
    {
      id: '4b08b7ff-20d7-4bed-81f3-3ea5d5f4ff0b',
      name: 'LEG3',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
    },
    {
      id: '571bf114-0584-45b9-b096-8052281df226',
      name: 'LEG4',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
    },
    {
      id: '5e91c349-a33e-4dce-90df-f3d7d8d7e06b',
      name: 'LEG5',
      cardType: CardType.HERO,
      gameSet: GameSets.LEGENDARY,
    },
  ];

  public static readonly dummyDataDarkCity: ICard[] = [
    {
      id: 'c86c0f8d-0c38-409c-a228-494ec5e22444',
      name: 'DC1',
      cardType: CardType.HERO,
      gameSet: GameSets.DARK_CITY,
    },
    {
      id: 'b0e3887c-261b-4183-b985-9035b29ceaa5',
      name: 'DC2',
      cardType: CardType.HERO,
      gameSet: GameSets.DARK_CITY,
    },
    {
      id: 'e12886a1-50d6-4c68-b67c-e494baa2c6ee',
      name: 'DC3',
      cardType: CardType.HERO,
      gameSet: GameSets.DARK_CITY,
    },
    {
      id: 'a028a4db-8a2e-4e6c-b854-52908534835c',
      name: 'DC4',
      cardType: CardType.HERO,
      gameSet: GameSets.DARK_CITY,
    },
    {
      id: '842dd6d5-6680-4a4c-9aa6-2bbcf6107212',
      name: 'DC5',
      cardType: CardType.HERO,
      gameSet: GameSets.DARK_CITY,
    },
  ];

  public static readonly ALL = [
    ...DummySet.dummyDataLegendary,
    ...DummySet.dummyDataDarkCity,
  ];
}

describe('cardset', () => {
  it('should create from static class hero sets', () => {
    expect(new DummySet(DummySet.dummyDataLegendary)).toBeTruthy();
  });

  it('should create with a gameset filter and be filtered', () => {
    const dummy: DummySet = new DummySet(DummySet.ALL, [GameSets.LEGENDARY]);
    expect(dummy).toBeTruthy();
    expect(dummy.getCards()).toHaveLength(DummySet.dummyDataLegendary.length);
  });

  it('should fail with an empty data set defined', () => {
    expect(() => new DummySet([])).toThrow(Error);
  });

  it('should fail with no game sets defined', () => {
    expect(() => new DummySet(DummySet.ALL, [])).toThrow(Error);
  });

  it('should fail with no records and no game sets defined', () => {
    expect(() => new DummySet([], [])).toThrow(Error);
  });
});

describe('Shuffling', () => {
  let dummy: DummySet;

  beforeAll(() => {
    dummy = new DummySet(DummySet.dummyDataLegendary);
  });

  it('should return 2 records', () => {
    expect(dummy.shuffle(2)).toHaveLength(2);
  });

  it('should return 0 records', () => {
    expect(dummy.shuffle(0)).toHaveLength(0);
  });

  it('should fail with negative required records', () => {
    expect(() => dummy.shuffle(-1)).toThrow(RangeError);
  });

  it(`should contain record ${DummySet.dummyDataLegendary[0].id}`, () => {
    expect(dummy.shuffle(2, [DummySet.dummyDataLegendary[0]])).toContain(
      DummySet.dummyDataLegendary[0]
    );
  });

  it('should fail when include and exclude are the same', () => {
    expect(() =>
      dummy.shuffle(
        5,
        [DummySet.dummyDataLegendary[1]],
        [DummySet.dummyDataLegendary[1]]
      )
    ).toThrow(Error);
  });

  it('should not be able to shuffle more cards than are in the deck', () => {
    expect(() => dummy.shuffle(DummySet.dummyDataLegendary.length + 1)).toThrow(
      RangeError
    );
  });

  it('should fail when included items are not in the selected gameset', () => {
    expect(() => dummy.shuffle(2, [DummySet.dummyDataDarkCity[0]])).toThrow(
      Error
    );
  });

  it('should fail when the number of included cards is more than what is requested', () => {
    expect(() => dummy.shuffle(1, DummySet.dummyDataLegendary)).toThrow(
      RangeError
    );
  });
});

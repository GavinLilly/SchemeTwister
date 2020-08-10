import { Heroes } from './heroes';
import { IHero } from './hero.interface';
import { GameSets } from '../gamesets';

describe('Heroes creation', () => {
  it('should create from static class hero sets', () => {
    expect(new Heroes(Object.values(Heroes.LEGENDARY))).toBeTruthy();
  });

  it('should create with all heroes as an array', () => {
    expect(new Heroes(Heroes.ALL_HEROES)).toBeTruthy();
  });

  it('should create with a gameset filter and be filtered', () => {
    const heroes: Heroes = new Heroes(Heroes.ALL_HEROES, [GameSets.LEGENDARY]);
    expect(heroes).toBeTruthy();
    expect(heroes.getCards()).toHaveLength(
      Object.values(Heroes.LEGENDARY).length
    );
  });

  it('should fail with no hero sets defined', () => {
    expect(() => {
      const heroes: Heroes = new Heroes([]);
    }).toThrow(Error);
  });

  it('should fail with no game sets defined', () => {
    expect(() => {
      const heroes: Heroes = new Heroes(Heroes.ALL_HEROES, []);
    }).toThrow(Error);
  });

  it('should fail with no records and no game sets defined', () => {
    expect(() => {
      const heroes: Heroes = new Heroes([], []);
    }).toThrow(Error);
  });
});

describe('Check shuffling logic', () => {
  const heroes: Heroes = new Heroes(Object.values(Heroes.LEGENDARY));

  it('should return 5 heroes', () => {
    expect(heroes.shuffle(5)).toHaveLength(5);
  });

  it('should return 0 heroes', () => {
    expect(heroes.shuffle(0)).toHaveLength(0);
  });

  it('should fail with negative heroes', () => {
    expect(() => heroes.shuffle(-1)).toThrow(RangeError);
  });

  it('should contain Emma Frost', () => {
    expect(heroes.shuffle(5, [Heroes.LEGENDARY.EMMA_FROST])).toContain(
      Heroes.LEGENDARY.EMMA_FROST
    );
  });

  it('should fail when include and exclude are the same', () => {
    expect(() =>
      heroes.shuffle(
        5,
        [Heroes.LEGENDARY.EMMA_FROST],
        [Heroes.LEGENDARY.EMMA_FROST]
      )
    ).toThrow(Error);
  });

  it('should not be able to shuffle more cards than are in the deck', () => {
    expect(() =>
      heroes.shuffle(Object.values(Heroes.LEGENDARY).length + 1)
    ).toThrow(RangeError);
  });
});

describe('Shuffling Legendary base set', () => {
  const heroes: Heroes = new Heroes(Object.values(Heroes.LEGENDARY));

  it('should give Legendary heroes', () => {
    const chosenHeroes: IHero[] = heroes.shuffle(5);
    expect(
      chosenHeroes.every((item) => item.gameSet === GameSets.LEGENDARY)
    ).toEqual(true);
  });

  it('should have 15 entries', () =>
    expect(Object.values(Heroes.LEGENDARY)).toHaveLength(15));
});

describe('Shuffling Dark City set', () => {
  const heroes: Heroes = new Heroes(Object.values(Heroes.DARK_CITY));

  it('should give Dark City heroes', () => {
    const chosenHeroes: IHero[] = heroes.shuffle(5);
    expect(
      chosenHeroes.every((item) => item.gameSet === GameSets.DARK_CITY)
    ).toEqual(true);
  });

  it('should have 17 entries', () =>
    expect(Object.values(Heroes.DARK_CITY)).toHaveLength(17));
});

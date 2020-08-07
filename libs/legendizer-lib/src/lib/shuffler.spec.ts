import { Shuffler } from './shuffler';
import { GameSet } from './enums';
import {
  IScheme,
  IMastermind,
  IHero,
  IHenchmen,
  IVillainGroup,
} from './interfaces';
import { Heroes } from './constants';

describe('Shuffler creation', () => {
  it('should create', () => {
    const shuffler: Shuffler = new Shuffler([
      GameSet.LEGENDARY,
      GameSet.DARK_CITY,
    ]);
    expect(shuffler).toBeTruthy();
  });
});

describe('Shuffling heroes', () => {
  const shuffler: Shuffler = new Shuffler([GameSet.LEGENDARY]);

  it('should return 5 heroes', () => {
    expect(shuffler.shuffleHeroes(5)).toHaveLength(5);
  });

  it('should return 0 heroes', () => {
    expect(shuffler.shuffleHeroes(0)).toHaveLength(0);
  });

  it('should fail with negative heroes', () => {
    expect(() => shuffler.shuffleHeroes(-1)).toThrow(RangeError);
  });

  it('should contain Emma Frost', () => {
    expect(shuffler.shuffleHeroes(5, [Heroes.Legendary.EMMA_FROST])).toContain(
      Heroes.Legendary.EMMA_FROST
    );
  });

  it('should fail when include and exclude are the same', () => {
    expect(() =>
      shuffler.shuffleHeroes(
        5,
        [Heroes.Legendary.EMMA_FROST],
        [Heroes.Legendary.EMMA_FROST]
      )
    ).toThrow(Error);
  });

  it('should not be able to shuffle more cards than are in the deck', () => {
    expect(() =>
      shuffler.shuffleHeroes(Object.values(Heroes.Legendary).length + 1)
    ).toThrow(RangeError);
  });
});

describe('Shuffling henchmen', () => {
  const shuffler: Shuffler = new Shuffler([
    GameSet.LEGENDARY,
    GameSet.DARK_CITY,
  ]);

  it('should return 2 henchmen', () => {
    expect(shuffler.shuffleHenchmen(2)).toHaveLength(2);
  });

  it('should return 0 henchmen', () => {
    expect(shuffler.shuffleHenchmen(0)).toHaveLength(0);
  });

  it('should fail with negative henchmen', () => {
    expect(() => shuffler.shuffleHenchmen(-1)).toThrow(RangeError);
  });
});

describe('Shuffling villain groups', () => {
  const shuffler: Shuffler = new Shuffler([
    GameSet.LEGENDARY,
    GameSet.DARK_CITY,
  ]);

  it('should return 2 villain groups', () => {
    expect(shuffler.shuffleVillains(2)).toHaveLength(2);
  });

  it('should return 0 villain groups', () => {
    expect(shuffler.shuffleVillains(0)).toHaveLength(0);
  });

  it('should fail with negative villains groups', () => {
    expect(() => shuffler.shuffleVillains(-1)).toThrow(RangeError);
  });
});

describe('Shuffling Legendary base set', () => {
  const shuffler: Shuffler = new Shuffler([GameSet.LEGENDARY]);

  it('should give a Legendary scheme', () => {
    const scheme: IScheme = shuffler.shuffleScheme();
    expect(scheme.gameSet).toEqual(GameSet.LEGENDARY);
  });

  it('should give a Legendary mastermind', () => {
    const mastermind: IMastermind = shuffler.shuffleMastermind();
    expect(mastermind.gameSet).toEqual(GameSet.LEGENDARY);
  });

  it('should give Legendary heroes', () => {
    const heroes: IHero[] = shuffler.shuffleHeroes(5);
    expect(heroes.every((item) => item.gameSet === GameSet.LEGENDARY)).toEqual(
      true
    );
  });

  it('should give Legendary henchmen', () => {
    const henchmen: IHenchmen[] = shuffler.shuffleHenchmen(2);
    expect(
      henchmen.every((item) => item.gameSet === GameSet.LEGENDARY)
    ).toEqual(true);
  });

  it('should give Legendary villains', () => {
    const villains: IVillainGroup[] = shuffler.shuffleVillains(2);
    expect(
      villains.every((item) => item.gameSet === GameSet.LEGENDARY)
    ).toEqual(true);
  });
});

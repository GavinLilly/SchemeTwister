import { faker } from '@faker-js/faker/locale/en';

import { GameSet, Hero } from '@schemetwister/libtwister';

import { SortByNamePipe } from './SortByName.pipe';

describe('SortByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortByNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return undefined if passed undefined', () => {
    const pipe = new SortByNamePipe();
    expect(pipe.transform()).toBeUndefined();
  });

  it('should sort entries passed to it', () => {
    const hero1 = new Hero({
      id: faker.string.uuid(),
      name: 'Hero ONE',
      gameSet: GameSet.empty(),
    });
    const hero2 = new Hero({
      id: faker.string.uuid(),
      name: 'Hero TWO',
      gameSet: GameSet.empty(),
    });
    const hero3 = new Hero({
      id: faker.string.uuid(),
      name: 'Hero THREE',
      gameSet: GameSet.empty(),
    });

    const pipe = new SortByNamePipe();
    const sorted = pipe.transform([hero3, hero1, hero2]);

    expect(sorted).toEqual([hero1, hero3, hero2]);
  });
});

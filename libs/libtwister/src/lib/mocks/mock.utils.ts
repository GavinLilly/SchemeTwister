import { faker } from '@faker-js/faker';

import { GAME_SET_SIZE } from '../model/constants/game-set-size.const';
import { GameSet } from '../model/game-set';
import { Keyword } from '../model/interfaces/keyword.interface';
import { Team } from '../model/interfaces/team.interface';
import { SeriesMeta } from '../model/series-meta';
import { capitalise } from '../utils/capitalise';

export const createMockGamesetMeta = (
  series = createMockSeriesMeta(),
  size = faker.helpers.objectValue(GAME_SET_SIZE)
) =>
  new GameSet(
    {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      releaseYear: faker.date.past().getFullYear(),
      series,
      size,
    },
    []
  );

export const createMockSeriesMeta = () =>
  new SeriesMeta(
    faker.string.uuid(),
    faker.commerce.productName(),
    faker.commerce.productDescription()
  );

/**
 * Creates a fake team with a name like a company
 * @returns a fake team
 */
export function createMockTeam(): Team {
  const name = faker.company.name();

  return {
    name,
    icon: `${faker.helpers.slugify(name)}.png`,
  };
}

/**
 * Creates an array of keywords
 * @param maxCount the maximum number of keywords that may be created. Defaults to 5
 * @returns an array of fake keywords
 */
export const createMockKeywords = (maxCount = 5) =>
  faker.helpers.multiple(() => createMockKeyword(), {
    count: {
      min: 0,
      max: maxCount,
    },
  });

/**
 * Creates a fake keyword
 * @returns a fake keyword
 */
export const createMockKeyword = (): Keyword => ({
  id: faker.string.uuid(),
  name:
    capitalise(faker.word.adjective()) + ' ' + capitalise(faker.word.verb()),
  description: faker.lorem.paragraph(),
});

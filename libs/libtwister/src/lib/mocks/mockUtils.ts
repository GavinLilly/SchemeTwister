import { faker } from '@faker-js/faker';

import { GAME_SET_SIZE, IKeyword, ITeam } from '../model';
import { SeriesMeta } from '../model/seriesMeta';

export const createMockGamesetMeta = (
  series = createMockSeriesMeta(),
  size = faker.helpers.objectValue(GAME_SET_SIZE)
) => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  releaseYear: faker.date.past().getFullYear(),
  series,
  size,
});

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
export function createMockTeam(): ITeam {
  const name = faker.company.name();

  return {
    name,
    icon: `${faker.helpers.slugify(name)}.png`,
  };
}

/**
 * Capitalises the first character of the given string
 * @param string the string to capitalise
 * @returns a capitalised string
 */
export const capitalise = (string: string) =>
  string[0].toUpperCase() + string.slice(1);

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
export const createMockKeyword = (): IKeyword => ({
  id: faker.string.uuid(),
  name:
    capitalise(faker.word.adjective()) + ' ' + capitalise(faker.word.verb()),
  description: faker.lorem.paragraph(),
});

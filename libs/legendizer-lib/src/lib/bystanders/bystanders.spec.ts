import { CardType } from '../cardSet';
import { IHero } from '../heroes';
import { Bystanders } from './bystanders';

describe('Legendary base set', () => {
  it('should have 1 entry', () =>
    expect(Object.values(Bystanders.LEGENDARY)).toHaveLength(1));
});

describe('Dark City set', () => {
  it('should have 3 entries', () =>
    expect(Object.values(Bystanders.DARK_CITY)).toHaveLength(3));
});

describe('X-Men set', () => {
  let xMenBystanders: IHero[];

  beforeAll(() => {
    xMenBystanders = Object.values(Bystanders.X_MEN);
  });

  it('should have 10 entries', () => expect(xMenBystanders).toHaveLength(10));
  it('should only contain bystander type cards', () =>
    expect(
      xMenBystanders.every((item) => item.cardType === CardType.BYSTANDER)
    ).toBeTruthy());
});

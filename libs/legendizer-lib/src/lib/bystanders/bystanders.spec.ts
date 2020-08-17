import { Bystanders } from './bystanders';

describe('Legendary base set', () => {
  it('should have 1 entry', () =>
    expect(Object.values(Bystanders.LEGENDARY)).toHaveLength(1));
});

describe('Dark City set', () => {
  it('should have 3 entries', () =>
    expect(Object.values(Bystanders.DARK_CITY)).toHaveLength(3));
});

import { GameSet } from '../GameSet';
import { CardType } from '../cardType.enum';

import { Bystander } from './bystander';

describe('Bystander', () => {
  let bystander: Bystander;

  beforeAll(() => {
    bystander = new Bystander({
      id: '9c945a39-30e4-470e-a40d-dd680bf7dc3d',
      name: 'TEST',
      copies: 10,
      gameSet: GameSet.empty(),
      victoryPoints: 20,
    });
  });

  it('should be a "BYSTANDER" card type', () =>
    expect(bystander.cardType).toBe(CardType.BYSTANDER));

  it('should have 10 copies', () => expect(bystander.copies).toEqual(10));

  it('should have 20 victory points', () =>
    expect(bystander.victoryPoints).toEqual(20));
});

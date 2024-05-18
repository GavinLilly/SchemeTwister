import { describe, beforeAll, it, expect } from 'vitest';

import { GameSet } from '../GameSet';
import { CARD_TYPE } from '../types/cardType.type';

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
    expect(bystander.cardType).toBe(CARD_TYPE.bystander));

  it('should have 10 copies', () => expect(bystander.copies).toEqual(10));

  it('should have 20 victory points', () =>
    expect(bystander.victoryPoints).toEqual(20));
});

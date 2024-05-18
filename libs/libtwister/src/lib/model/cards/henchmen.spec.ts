import { describe, beforeAll, it, expect } from 'vitest';

import { GameSet } from '../GameSet';
import { CARD_TYPE } from '../types/cardType.type';

import { Henchmen } from './henchmen';

describe('Henchmen', () => {
  let henchmen: Henchmen;

  beforeAll(() => {
    henchmen = new Henchmen({
      id: '42880f22-3f41-4cdd-99df-e35a1c0f995a',
      attackPoints: 10,
      fight: 'FIGHT',
      gameSet: GameSet.empty(),
      name: 'Test',
      victoryPoints: 20,
      ability: 'ABILITY',
      ambush: 'AMBUSH',
    });
  });

  it('should be a "HENCHMEN" card type', () =>
    expect(henchmen.cardType).toBe(CARD_TYPE.henchmen));

  it('should have a matching fight clause', () =>
    expect(henchmen.fight).toEqual('FIGHT'));

  it('should have a matching ambush clause', () =>
    expect(henchmen.ambush).toEqual('AMBUSH'));

  it('should have a matching ability clause', () =>
    expect(henchmen.ability).toEqual('ABILITY'));
});

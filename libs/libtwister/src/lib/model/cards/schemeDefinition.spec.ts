import { describe, expect, it } from 'vitest';

import { MockCardFactory } from '../../mocks';
import { CARD_TYPE } from '../types';

describe('SchemeDefinition', () => {
  const cardFactory = new MockCardFactory();

  describe('cardType', () =>
    it('should be CARD_TYPE.scheme', () =>
      expect(cardFactory.createScheme().cardType).toBe(CARD_TYPE.scheme)));
});

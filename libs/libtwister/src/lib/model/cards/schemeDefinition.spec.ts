import { describe, expect, it } from 'vitest';

import { MockCardFactory } from '../../mocks/mockCardFactory';
import { CARD_TYPE } from '../types/cardType.type';

describe('SchemeDefinition', () => {
  const cardFactory = new MockCardFactory();

  describe('cardType', () =>
    it('should be CARD_TYPE.scheme', () =>
      expect(cardFactory.createSchemeDefinition().cardType).toBe(
        CARD_TYPE.scheme
      )));
});

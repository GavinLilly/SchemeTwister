import { describe, expect, it } from 'vitest';

import { CARD_TYPE } from '../constants/card-type.const';
import { MockCardFactory } from '../testing/mocks/mock-card.factory';

describe('SchemeDefinition', () => {
  const cardFactory = new MockCardFactory();

  describe('cardType', () =>
    it('should be CARD_TYPE.scheme', () =>
      expect(cardFactory.createSchemeDefinition().cardType).toBe(
        CARD_TYPE.scheme
      )));
});

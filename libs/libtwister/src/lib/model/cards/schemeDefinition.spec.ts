import { describe, expect, it } from 'vitest';

import { TEST_NORMAL_SCHEME } from '../../testData/schemes';
import { CARD_TYPE } from '../types';

describe('SchemeDefinition', () => {
  const scheme = TEST_NORMAL_SCHEME;

  describe('cardType', () =>
    it('should be CARD_TYPE.scheme', () =>
      expect(scheme.cardType).toBe(CARD_TYPE.scheme)));
});

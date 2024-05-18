import { describe, it, expect } from 'vitest';

import { Hero } from './hero';

describe('Hero', () => {
  describe('that is empty', () => {
    it('should create', () => expect(Hero.empty()).toBeDefined());
  });
});

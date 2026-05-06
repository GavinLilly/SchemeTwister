import { describe, it, expect, beforeAll } from 'vitest';

import { Hero } from './hero';

describe('Hero', () => {
  describe('that is empty', () => {
    let hero: Hero;

    beforeAll(() => {
      hero = Hero.empty();
    });

    it('should create', () => expect(hero).toBeDefined());

    describe('toString', () =>
      it("should return the Hero's name", () =>
        expect(hero.toString()).toBe(hero.name)));
  });
});

/* eslint-disable no-undef */
import {
  ICard,
  IGameSetup,
  GameSet,
  NumPlayers,
  SinglePlayerError,
  CardType,
} from '../../model';

export function gameSetTest(
  gameSet: GameSet,
  numBystanders: number,
  numHeroes: number,
  numVillains: number,
  numHenchmen: number,
  numMasterminds: number,
  numSchemes: number
) {
  describe(`${gameSet.name} game set`, () => {
    describe.each([
      ['bystanders', numBystanders, CardType.BYSTANDER],
      ['heroes', numHeroes, CardType.HERO],
      ['villains', numVillains, CardType.VILLAINGROUP],
      ['henchmen', numHenchmen, CardType.HENCHMEN],
      ['masterminds', numMasterminds, CardType.MASTERMIND],
      ['schemes', numSchemes, CardType.SCHEME],
    ])('%s deck', (readableCardType, numCards, cardType) => {
      let cards: ICard[];

      beforeAll(() => {
        cards = gameSet.get(cardType) || [];
      });

      it(`should have ${numCards} cards`, () =>
        expect(cards).toHaveLength(numCards));

      it(`should have all cards be of type ${cardType}`, () =>
        expect(cards.every((card) => card.cardType === cardType)).toBeTruthy());
    });
  });
}

export function singlePlayerTest(
  getSetup: (num: NumPlayers) => Promise<IGameSetup>
) {
  it('should throw an error for 1 player', async () => {
    try {
      await getSetup(1);
    } catch (e) {
      expect(e).toBeInstanceOf(SinglePlayerError);
    }
  });

  it.each([2, 3, 4, 5])('should generate a setup for %p players', async (arg) =>
    expect(getSetup(arg as NumPlayers)).toBeTruthy()
  );
}

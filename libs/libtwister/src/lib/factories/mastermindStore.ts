import {
  EpicMastermind,
  Mastermind,
  MastermindWithEpic,
  MultiMastermind,
  TransformingMastermind,
} from '../model/cards/mastermind';
import { randomize } from '../utils/randomize';

import { CardFactory } from './cardFactory';
import { CardStore } from './cardStore';

export type MastermindType =
  | Mastermind
  | TransformingMastermind
  | MultiMastermind
  | MastermindWithEpic;

/**
 * A store specifically for Masterminds that allows for randomizing between epic
 * and non-epic masterminds.
 */
export class MastermindStore extends CardStore<MastermindType> {
  public override getRandom(): MastermindType;
  public override getRandom(
    count?: number | undefined,
    func?: ((card: MastermindType) => boolean) | undefined
  ): MastermindType | MastermindType[];
  public override getRandom(
    count?: number,
    func?: ((card: MastermindType) => boolean) | undefined
  ): MastermindType | MastermindType[] {
    const picked = super.getRandom(count, func);

    if (picked instanceof MastermindWithEpic) {
      return randomize([picked, picked.epic]);
    }

    return picked;
  }

  public override pickOne(idOrCard: string | MastermindType): MastermindType {
    const cardId = CardFactory.getCardId(idOrCard);

    try {
      return super.pickOne(cardId);
    } catch (err) {
      // Card could not be found. Check for epic cards
      const foundEpicCard = this._getStandardCardFromEpicId(cardId);

      if (foundEpicCard !== undefined) {
        super.pickOne(foundEpicCard.reverse);
        return foundEpicCard;
      }

      throw err;
    }
  }

  public override removeCard(idOrCard: string | MastermindType): void {
    const cardId = CardFactory.getCardId(idOrCard);

    const isStandardCard = this.availableCards.some(
      (mastermind) => mastermind.id === cardId
    );

    if (isStandardCard) {
      return super.removeCard(cardId);
    }

    const foundEpicCard = this._getStandardCardFromEpicId(cardId);

    if (foundEpicCard !== undefined) {
      return super.removeCard(foundEpicCard.reverse.id);
    }
  }

  public override get(id: string): MastermindType;
  public override get(ids: string[]): MastermindType[];
  public override get(
    idOrIds: string | string[]
  ): MastermindType | MastermindType[] {
    const ids = idOrIds instanceof Array ? idOrIds : [idOrIds];

    const cards = ids.map((id) => {
      try {
        return super.get(id);
      } catch (err) {
        // Card could not be found. Check for epic cards
        const foundEpicCard = this._getStandardCardFromEpicId(id);

        if (foundEpicCard !== undefined) {
          return super.get(foundEpicCard.reverse.id);
        } else {
          throw err;
        }
      }
    });

    if (cards.length === 1) {
      return cards[0];
    }

    return cards;
  }

  /**
   * Gets the reverse side of an epic mastermind card (i.e. the standard side)
   * @param cardId the ID of an epic mastermind
   * @returns the reverse side of the card
   */
  private _getStandardCardFromEpicId = (cardId: string) =>
    this.allCards
      .filter((mastermind): mastermind is EpicMastermind => mastermind.isEpic)
      .find((mastermind) => mastermind.id === cardId);
}

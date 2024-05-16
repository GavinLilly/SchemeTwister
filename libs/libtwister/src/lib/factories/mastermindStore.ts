import {
  Mastermind,
  MastermindWithEpic,
  AdaptingMastermind,
  TransformingMastermind,
} from '../model/cards/mastermind';
import { randomize } from '../utils/randomize';

import { CardFactory } from './cardFactory';
import { CardStore } from './cardStore';

export type MastermindType =
  | Mastermind
  | TransformingMastermind
  | AdaptingMastermind
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
      return super.removeCard(foundEpicCard.id);
    }
  }

  public override get(id: string): MastermindType | undefined;
  public override get(
    ids: string[]
  ): (MastermindType | undefined)[] | undefined;
  public override get(
    idOrIds: string | string[]
  ): MastermindType | (MastermindType | undefined)[] | undefined {
    const ids = idOrIds instanceof Array ? idOrIds : [idOrIds];

    const cards = ids
      .map((id) => {
        const normalCard = super.get(id);

        if (normalCard !== undefined) {
          return normalCard;
        }
        // Card could not be found. Check for epic cards
        const foundEpicCard = this._getStandardCardFromEpicId(id);

        if (foundEpicCard !== undefined) {
          return super.get(foundEpicCard.id);
        }

        return undefined;
      })
      .filter((card): card is MastermindType => !!card);

    switch (cards.length) {
      case 0:
        return undefined;
      case 1:
        return cards[0];
      default:
        return cards;
    }
  }

  /**
   * Gets the reverse side of an epic mastermind card (i.e. the standard side)
   * @param cardId the ID of an epic mastermind
   * @returns the reverse side of the card
   */
  private _getStandardCardFromEpicId = (cardId: string) =>
    this.allCards
      .filter((mastermind) => mastermind instanceof MastermindWithEpic)
      .filter((mastermind): mastermind is MastermindWithEpic => !!mastermind)
      .find((mastermind) => mastermind.epic.id === cardId);
}

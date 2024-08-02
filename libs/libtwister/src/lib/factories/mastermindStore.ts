import {
  Mastermind,
  MastermindWithEpic,
  AdaptingMastermind,
  TransformingMastermind,
} from '../model/cards/mastermind';
import { randomize } from '../utils/randomize';

import { CardFactory, GetRandomOptions } from './cardFactory';
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
    options: GetRandomOptions<MastermindType>
  ): MastermindType[];
  public override getRandom(
    options?: GetRandomOptions<MastermindType>
  ): MastermindType | MastermindType[] {
    const pickNormalOrEpic = (mastermind: MastermindType) =>
      mastermind instanceof MastermindWithEpic
        ? randomize([mastermind, mastermind.epic])
        : mastermind;

    if (options === undefined) {
      const picked = super.getRandom();

      return pickNormalOrEpic(picked);
    }

    return super.getRandom(options).map(pickNormalOrEpic);
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
    return this.getCardOrCards(idOrIds, (id) => {
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
    });
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

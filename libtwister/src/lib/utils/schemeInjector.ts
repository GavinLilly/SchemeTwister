import { CardType } from '../model';
import {
  NewScheme,
  SchemeMinusRules,
} from '../model/interfaces/newScheme.interface';

export function injectGameSet(
  gameSetId: string,
  scheme: NewScheme
): SchemeMinusRules {
  return {
    ...scheme,
    gameSetId: gameSetId,
    cardType: CardType.SCHEME,
  };
}

/**
 * Injects the provided game set ID into the provided schemes
 * @param gameSetId the game set ID to inject into the scheme
 * @param schemes the schemes to inject into
 * @returns schemes including the game set ID and card type
 */
export function injectGameSetToMany(
  gameSetId: string,
  schemes: NewScheme[]
): SchemeMinusRules[] {
  const injected = [...schemes];

  return injected.map((scheme) => injectGameSet(gameSetId, scheme));
}

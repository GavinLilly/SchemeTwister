import { CardType, IGameSetMeta } from '../model';
import {
  ShortScheme,
  SchemeMinusRules,
} from '../model/interfaces/newScheme.interface';

export function injectGameSet(
  gameSet: IGameSetMeta,
  scheme: ShortScheme
): SchemeMinusRules {
  return {
    ...scheme,
    gameSet: gameSet,
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
  gameSet: IGameSetMeta,
  schemes: ShortScheme[]
): SchemeMinusRules[] {
  const injected = [...schemes];

  return injected.map((scheme) => injectGameSet(gameSet, scheme));
}

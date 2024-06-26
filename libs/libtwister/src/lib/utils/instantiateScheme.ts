import { Scheme } from '../model/schemes/Scheme';
import { SchemeMinusRules } from '../model/types/schemeMinusRules.type';

/**
 * Instantiates a scheme based on the definition passed to the function. If
 * there is no override of the scheme type then it will instantiate a default
 * scheme.
 * @param scheme The scheme to instantiate, as an object definition
 * @returns The instantiated scheme
 */
export default function instantiateScheme(scheme: SchemeMinusRules): Scheme {
  if (scheme.meta.overrideScheme === undefined) {
    return new Scheme(scheme);
  }

  if (scheme.meta.overrideScheme.params) {
    const schemeType = scheme.meta.overrideScheme.schemeType;
    const parameters = scheme.meta.overrideScheme.params;

    return new schemeType(scheme, ...parameters);
  }

  return new scheme.meta.overrideScheme.schemeType(scheme);
}

import { Scheme, SchemeMinusRules } from '../model';

/**
 * Instantiates a scheme based on the definition passed to the function. If
 * there is no override of the scheme type then it will instantiate a default
 * scheme.
 * @param scheme the scheme to instantiate, as an object definition
 * @returns the instantiated scheme
 */
export default function instantiateScheme(scheme: SchemeMinusRules): Scheme {
  if (scheme.meta.overrideScheme === undefined) {
    return new Scheme(scheme);
  }

  if (scheme.meta.overrideScheme.params) {
    return new scheme.meta.overrideScheme.schemeType(
      scheme,
      ...scheme.meta.overrideScheme.params
    );
  }

  return new scheme.meta.overrideScheme.schemeType(scheme);
}

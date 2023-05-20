import { Scheme, SchemeMinusRules } from '../model';

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

import { Scheme, SchemeMinusRules } from '../model';

export default function instantiateScheme(scheme: SchemeMinusRules): Scheme {
  if (scheme.meta.overrideScheme !== undefined) {
    if (scheme.meta.overrideScheme.params !== undefined) {
      return new scheme.meta.overrideScheme.schemeType(
        scheme,
        ...scheme.meta.overrideScheme.params
      );
    } else {
      return new scheme.meta.overrideScheme.schemeType(scheme);
    }
  } else {
    return new Scheme(scheme);
  }
}

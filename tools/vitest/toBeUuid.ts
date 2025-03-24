import { isUUID } from 'validator';
import { MinimalMatcherState } from './minimalMatcherState';

export function toBeUUID(this: MinimalMatcherState, received: any) {
  const { isNot } = this;

  return {
    pass: isUUID(received),
    message: () => `${received} is${isNot ? ' not' : ''} a UUID`,
  };
}

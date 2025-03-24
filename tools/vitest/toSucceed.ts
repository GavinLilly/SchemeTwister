import { Effect } from 'effect';
import { MinimalMatcherState } from './minimalMatcherState';

export function toSucceed(this: MinimalMatcherState, received: any) {
  if (Effect.isEffect(received)) {
    const { isNot } = this;

    const isSuccess = Effect.runSync(
      Effect.isSuccess(received as Effect.Effect<unknown, unknown, never>)
    );
    return {
      pass: isSuccess,
      message: () =>
        isNot ? `${received} did not succeed` : `${received} succeeded`,
    };
  }

  return {
    pass: false,
    message: () => 'Received is not an Effect',
  };
}

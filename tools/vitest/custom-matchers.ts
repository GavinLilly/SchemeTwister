import { expect } from 'vitest';
import { toSucceed } from './toSucceed';
import { toBeUUID } from './toBeUuid';

expect.extend({
  toBeUUID,
  toSucceed,
});

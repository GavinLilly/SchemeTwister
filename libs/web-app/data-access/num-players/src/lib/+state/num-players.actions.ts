import { createAction, props, Action } from '@ngrx/store';

export const incrementPlayers = createAction(
  '[NumPlayers Component] Increment Players'
);
export const decrementPlayers = createAction(
  '[NumPlayers Component] Decrement Players'
);
export const setPlayers = createAction(
  '[NumPlayers Component] Set Players',
  props<{ count: number }>()
);

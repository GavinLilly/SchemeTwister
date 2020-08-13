import { NumPlayersEntity } from './num-players.models';
import * as NumPlayersActions from './num-players.actions';
import { State, initialState, reducer } from './num-players.reducer';

describe('NumPlayers Reducer', () => {
  const createNumPlayersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as NumPlayersEntity);

  beforeEach(() => {});

  describe('valid NumPlayers actions', () => {
    it('loadNumPlayersSuccess should return set the list of known NumPlayers', () => {
      const numPlayers = [
        createNumPlayersEntity('PRODUCT-AAA'),
        createNumPlayersEntity('PRODUCT-zzz'),
      ];
      const action = NumPlayersActions.loadNumPlayersSuccess({ numPlayers });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

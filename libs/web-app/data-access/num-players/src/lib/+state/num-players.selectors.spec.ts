import { NumPlayersEntity } from './num-players.models';
import { State, numPlayersAdapter, initialState } from './num-players.reducer';
import * as NumPlayersSelectors from './num-players.selectors';

describe('NumPlayers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNumPlayersId = (it) => it['id'];
  const createNumPlayersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as NumPlayersEntity);

  let state;

  beforeEach(() => {
    state = {
      numPlayers: numPlayersAdapter.addAll(
        [
          createNumPlayersEntity('PRODUCT-AAA'),
          createNumPlayersEntity('PRODUCT-BBB'),
          createNumPlayersEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('NumPlayers Selectors', () => {
    it('getAllNumPlayers() should return the list of NumPlayers', () => {
      const results = NumPlayersSelectors.getAllNumPlayers(state);
      const selId = getNumPlayersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NumPlayersSelectors.getSelected(state);
      const selId = getNumPlayersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getNumPlayersLoaded() should return the current 'loaded' status", () => {
      const result = NumPlayersSelectors.getNumPlayersLoaded(state);

      expect(result).toBe(true);
    });

    it("getNumPlayersError() should return the current 'error' state", () => {
      const result = NumPlayersSelectors.getNumPlayersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

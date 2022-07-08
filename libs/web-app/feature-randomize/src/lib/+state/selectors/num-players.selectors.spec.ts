import { INumPlayersState } from '../reducers/num-players.reducer';

import { selectNumPlayers } from './num-players.selectors';

describe('NumPlayers Selectors', () => {
  const initialState: INumPlayersState = {
    numPlayers: 4,
    isAdvancedSolo: false,
  };

  it('should select the number of players', () => {
    const result = selectNumPlayers.projector(initialState);
    expect(result).toBe(4);
  });
});

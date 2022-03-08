import * as fromNumPlayers from './num-players.actions';

describe('incrementNumPlayers', () => {
  it('should return an action', () => {
    expect(fromNumPlayers.incrementNumPlayers().type).toBe(
      '[Randomize] Increment NumPlayers'
    );
  });
});

describe('decrementNumPlayers', () => {
  it('should return an action', () => {
    expect(fromNumPlayers.decrementNumPlayers().type).toBe(
      '[Randomize] Decrement NumPlayers'
    );
  });
});

describe('setNumPlayers', () => {
  it('should return an action', () => {
    expect(fromNumPlayers.setNumPlayers({ numPlayers: 2 }).type).toBe(
      '[Randomize] Set NumPlayers'
    );
  });
});

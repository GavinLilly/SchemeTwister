import * as fromNumPlayers from './num-players.actions';

describe('incrementNumPlayers', () => {
  it('should return an action', () => {
    expect(fromNumPlayers.incrementNumPlayers().type).toBe(
      '[Randomize Page] Increment NumPlayers'
    );
  });
});

describe('decrementNumPlayers', () => {
  it('should return an action', () => {
    expect(fromNumPlayers.decrementNumPlayers().type).toBe(
      '[Randomize Page] Decrement NumPlayers'
    );
  });
});

describe('setNumPlayers', () => {
  it('should return an action', () => {
    expect(fromNumPlayers.setNumPlayers({ numPlayers: 2 }).type).toBe(
      '[Randomize Page] Set NumPlayers'
    );
  });
});

import { numPlayersActions } from './num-players.actions';

describe('incrementNumPlayers', () => {
  it('should return an action', () => {
    expect(numPlayersActions.incrementNumberOfPlayers().type).toBe(
      '[Number of players component] Increment Number of Players'
    );
  });
});

describe('decrementNumPlayers', () => {
  it('should return an action', () => {
    expect(numPlayersActions.decrementNumberOfPlayers().type).toBe(
      '[Number of players component] Decrement Number of Players'
    );
  });
});

describe('setNumPlayers', () => {
  it('should return an action', () => {
    expect(numPlayersActions.setNumberOfPlayers({ numPlayers: 2 }).type).toBe(
      '[Number of players component] Set Number of Players'
    );
  });
});

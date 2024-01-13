import { randomizePageActions } from './game-setup.actions';

describe('generateGameSetups', () => {
  it('should return an action', () => {
    expect(randomizePageActions.generateGameSetup().type).toBe(
      '[Randomize Page] Generate GameSetup'
    );
  });
});

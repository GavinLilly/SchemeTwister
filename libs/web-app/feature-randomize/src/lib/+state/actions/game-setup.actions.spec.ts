import * as fromGameSetup from './game-setup.actions';

describe('generateGameSetups', () => {
  it('should return an action', () => {
    expect(fromGameSetup.generateGameSetup().type).toBe(
      '[Randomize Page] Generate GameSetup'
    );
  });
});

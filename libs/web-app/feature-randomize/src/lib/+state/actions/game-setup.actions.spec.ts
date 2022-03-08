import * as fromGameSetup from './game-setup.actions';

describe('generateGameSetups', () => {
  it('should return an action', () => {
    expect(fromGameSetup.generateGameSetups().type).toBe('[GameSetup] Generate GameSetups');
  });
});

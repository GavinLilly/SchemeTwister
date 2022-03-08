import * as fromSelectedGameSets from './game-sets.actions';

describe('loadSelectedGameSetss', () => {
  it('should return an action', () => {
    expect(fromSelectedGameSets.addGameSets().type).toBe(
      '[SelectedGameSets] Load SelectedGameSetss'
    );
  });
});

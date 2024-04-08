import * as teams from './teams';

describe('Teams', () => {
  it('should have unique team names', () => {
    const teamNames = Object.values(teams).map((team) => team.name);
    const teamNameSet = new Set(teamNames);
    expect(teamNames).toHaveLength(teamNameSet.size);
  });
  it('should have icons in the asset directory', () => {
    expect(
      Object.values(teams).every(
        (item) => item.icon.substring(0, 19) === '/assets/icons/teams/'
      )
    );
  });
});

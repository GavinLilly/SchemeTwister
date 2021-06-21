import { Teams } from './teams';

describe('Teams', () => {
  it('should have unique team names', () => {
    const teamNames = Object.values(Teams).map((team) => team.name);
    const teamNameSet = new Set(teamNames);
    expect(teamNames).toHaveLength(teamNameSet.size);
  });
  it('should have icons in the asset directory', () => {
    expect(
      Object.values(Teams).every(
        (item) => item.icon.substring(0, 19) === '/assets/icons/teams/'
      )
    );
  });
});

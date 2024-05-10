import { ITeam } from '@schemetwister/libtwister';
import { describe, it, expect, test } from 'vitest';

export function teamsTest(teams: ITeam[]) {
  return describe('Teams', () => {
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
}

describe('Common tests Teams', () =>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  test('should be used for implementation', () => {}));

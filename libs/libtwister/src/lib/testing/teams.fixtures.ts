import { describe, expect, it } from 'vitest';

import { Team } from '../shared/team.interface';

/**
 *
 * @param teams
 */
export function testTeams(teams: Team[]) {
  return describe('Teams', () => {
    it('should have unique team names', () => {
      const teamNames = Object.values(teams).map((team) => team.name);
      const teamNameSet = new Set(teamNames);
      expect(teamNames).toHaveLength(teamNameSet.size);
    });
    it('should have icons in the asset directory', () => {
      for (const team of teams) {
        expect(team.icon).not.toHaveLength(0);
      }
    });
  });
}

import { IKeyword } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const REVENGE: IKeyword = {
  name: KeywordName.REVENGE,
  id: 'abaa2bbb-df43-470a-b496-6d0be11b1b6f',
  description: `<ul>
<li>For Villain groups that have the Revenge ability, each Villain gets +1 Attack for every Villain of that group in your Victory Pile.</li>
<li>Revenge is player specific. It will change based on the damage each player has caused to a Villain group. If you've KO'd 2 members of the Deadpool's 'Friends' Villain group then every other member of that group, that enters or is already in the city, will get +2 Attack during your turns. If another player has yet to KO'd a member of that group then the group doesn't gain any Attack. The more damage YOU do, the more that group hates YOU.</li>
<li>Revenge is not limited to just Villains either. Masterminds can also hold a grudge. Big surprise there.</li>
</ul>`,
};

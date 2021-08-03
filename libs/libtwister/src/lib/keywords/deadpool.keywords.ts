import { EXCESSIVE_VIOLENCE, REVENGE } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const ExcessiveViolence: IKeyword = {
  ...EXCESSIVE_VIOLENCE,
  description: `<ul>
<li>Once per turn, you can spend one Attack point more than you need to fight a bad guy "using Excessive Violence." If you do, you get to use all the Excessive Violence abilities on Cards you've already played this turn.</li>
<li>If you've played multiple Heroes (even multiple copies of the same Hero) with the Excessive Violence keyword they would all trigger at the same time. And no, you don't get to save it for later. Stop trying to find loopholes. It's annoying.</li>
<li>If you fight with Excessive Violence, then draw or play more cards with Excessive Violence abilities later in the turn, it will be too late to use those abilities.</li>
<li>Some bad guys also have Excessive Violence abilities that let you do something awesome. If you spend one more attack point than you need to fight them, you can do that awesome thing!</li>
</ul>`,
};

export const Revenge: IKeyword = {
  ...REVENGE,
  description: `<ul>
<li>For Villain groups that have the Revenge ability, each Villain gets +1 Attack for every Villain of that group in your Victory Pile.</li>
<li>Revenge is player specific. It will change based on the damage each player has caused to a Villain group. If you've KO'd 2 members of the Deadpool's 'Friends' Villain group then every other member of that group, that enters or is already in the city, will get +2 Attack during your turns. If another player has yet to KO'd a member of that group then the group doesn't gain any Attack. The more damage YOU do, the more that group hates YOU.</li>
<li>Revenge is not limited to just Villains either. Masterminds can also hold a grudge. Big surprise there.</li>
</ul>`,
};

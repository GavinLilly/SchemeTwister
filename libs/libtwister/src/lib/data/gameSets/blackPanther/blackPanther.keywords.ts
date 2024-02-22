import { IKeyword } from '../../../model';
import { KeywordName } from '../../keywordName.enum';

export const AMBUSH_ON_HEROES: IKeyword = {
  name: KeywordName.AMBUSH_ON_HEROES,
  id: '02a102a9-4ca9-4674-bebf-43ba858c7840',
  description: `Some Heroes say things like "Ambush: Draw a card." This is similar to how a Villain does its Ambush ability when it enters the city.
<ul>
<li>When a Hero with a "Ambush" ability enters the HQ during your turn, you may use that Ambush ability if you have a Hero.</li>
<li>As always, you "have a Hero" if you have played a Hero this turn or if you have a Hero in your hand (or if you control a Hero Artifact).</li>
<li>New Heroes usually enter the HQ when you recruit a Hero or a Villain escapes from the city, creating an empty space in the HQ that you refill.</li>
<li>In games with Hero Ambush abilities, you may want to recruit before you fight, in case a new Hero entering the HQ gives you extra Attack or cards that you can use to fight stronger enemies.</li>
</ul>`,
};

export const WOUNDS_ON_VILLAINS: IKeyword = {
  name: KeywordName.WOUNDS_ON_VILLAINS,
  id: 'a539a133-91f1-473f-aa87-7cc91ae09f0c',
  description: `<ul>
<li>Some Hero cards say things like "Wound a Villain."</li>
<li>To do this: Put a Wound onto a Villain from the Wound Stack or from the KO pile. A Villain gets -1 Attack for each Wound on it. When that Villain is defeated or leaves the city, return all Wounds on it to the Wound Stack.</li>
<li>If a Villain has 0 Attack or negative Attack, they don't disappear automatically, but you can fight them during your turn by spending 0 Attack. (If you fight a Villain with negative Attack, you won't get a refund.)</li>
<li>Some cards specifically say they Wound the Mastermind. This works the same way, with all of the Mastermind's Wounds returning to the Wound Stack after a Mastermind Tactic is fought. The Wounds go away even if the Mastermind Tactic tells you to shuffle the Tactic back into the Mastermind's other Tactics or put the Tactic somewhere else.</li>
<li>Killmonger has 5 Attack and says "While Killmonger has more than 0 Attack, you cannot fight him. Instead, you may spend Attack equal to his Attack to Wound him and get +1 Recruit." So players will have to spend 5 Attack, then 4 Attack, 3 Attack, 2 Attack, and 1 Attack, getting 5 Recruit along the way. Then a player can fight him at 0 Attack to take a random Tactic, remove Killmonger's Wounds (and not get +1 Recruit). Malice and Preyy work similarly. You can Wound them this way multiple times per turn. This does not count as a "Fight," and you can still use the "Healing" ability on your own Wounds on the same turn that you Wound an enemy this way.</li>
<li>If your Wound Stack contains different kinds of Wounds, like the Grievous Wounds from Legendary: Civil War, then whenever you return Wounds to the Wound Stack, put them on the bottom. Wounds on enemies are face up.</li>
<li>If an effect causes "each player" to gain a Wound (or do anything else), start with the current player then go clockwise.</li>
</ul>`,
};

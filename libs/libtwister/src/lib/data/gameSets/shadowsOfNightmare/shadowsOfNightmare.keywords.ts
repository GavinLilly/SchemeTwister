import { IKeyword } from '../../../model';
import { KeywordName } from '../../enums';

export const DEMONIC_BARGAIN: IKeyword = {
  name: KeywordName.DEMONIC_BARGAIN,
  id: '45c37246-c3db-4766-9ec3-caacea9678df',
  description: `Demons offer gifts of power with a dark price, hoping to corrupt the souls of mortals. These deals with the devil are especially corrupting to the powerful and arrogant. The humble are more likely to escape with their souls intact. This is represented with the new Demonic Bargain keyword.
<ul>
  <li>Some Villains like Satana Hellstrom say things like “Fight: Choose a player to make a Demonic Bargain with Satana Hellstrom to rescue three Bystanders.”</li>
  <li>That player discards the top card of their deck to see if they are corrupted by power. If that discarded card costs 1 or more, that player is too powerful and arrogant to resist temptation and gains a Wound, to the demon's delight.</li>
  <li>If that discarded card costs 0, then that player has been humble enough to resist corruption.</li>
  <li>Whether that player gained a Wound or not, they then gain the Demonic Bargain's listed benefit.</li>
  <li>Some cards have you choose which player must make a Bargain for a benefit. Think carefully about how many cards in your deck cost 0. If most of your deck is still 0-cost cards, it may be worthwhile to seize the power of the Demonic Bargain for yourself. But if your deck has lots of high-cost cards, then it may be wiser to choose another player to make the Demonic Bargain instead. Just beware: mortals who think they can outwit and outbargain a Demon are often left regretting their hubris.</li>
  <li>When you choose a player to make a Demonic Bargain, that player cannot decline.</li>
  <li>Dormammu forces players to make cruel, all-downside Demonic Bargains, with the chance of a Wound plus an additional negative effect.</li>
  <li>If you use card abilities to look at or manipulate the top card of your deck, you may gain valuable insight as to whether a Demonic Bargain will punish you.</li>
</ul>`,
};

export const ASTRAL_PLANE: IKeyword = {
  name: KeywordName.ASTRAL_PLANE,
  id: '9ca7a462-b510-4add-8659-8e54f1d4a901',
  description: `The Fear Lords are cruel demons that move themselves and others beyond the physical world to a realm of pure psychic energy. There they prey on the human psyche, evoking nightmare and terror. This is represented with new “Astral Plane” abilities.
<ul>
  <li>Some Villains say things like “Fight: If this Villain was in the city, it enters the Astral Plane.”</li>
  <li>The Astral Plane is a single, unique space that only exists in games with cards that use the Astral Plane. It sits immediately to the right of the Villain Deck.</li>
  <li>While a Villain is in the Astral Plane, it has no physical form: it can only be fought with Recruit, not Attack. To fight a 5 Attack Villain you must spend 5 Recruit. When you fight a Villain in the Astral Plane, put it in your Victory Pile and do its Fight effect as normal.</li>
  <li>When a Villain enters the Astral Plane, any Villain already there escapes. This causes all the same effects as if that Villain had escaped the city (including KO'ing from the HQ, discarding from captured Bystanders, and Escape abilities).</li>
  <li>Villains still get -Attack and +Attack bonuses while in the Astral Plane. You just use Recruit to fight the total Attack.</li>
  <li>The Mastermind “Nightmare” can also enter the Astral Plane. While there, he can only be fought with Recruit, not Attack. If he escapes the Astral Plane, do all the normal effects for a Villain escaping the city. Then do the Escape ability written on Nightmare, which moves him to the Mastermind space.</li>
  <li>The Astral Plane is not a city space. It's not “adjacent” to any city spaces. Card effects can't move or swap Villains to or from the Astral Plane unless they explicitly mention the Astral Plane.</li>
  <li>Villains do Ambush effects when they enter the city. The Astral Plane is not part of the city, so Villains that enter the Astral Plane don't do their Ambush effects at that time.</li>
  <li>For keywords from other sets: To fight a "Chivalrous Duel" enemy in the Astral Plane, you must spend Recruit from a single Hero name. You must spend Recruit to use Excessive Violence or Human Shields from the Astral Plane. You can't use "Piercing Energy" on enemies in the Astral Plane. "Bribe" and other cards that say "You can spend any combination of Recruit or Attack to fight that Villain this turn." do not work against enemies in the Astral Plane.</li>
</ul>`,
};

export const RITUAL_ARTIFACTS: IKeyword = {
  name: KeywordName.RITUAL_ARTIFACTS,
  id: 'cdcd375f-0c13-486e-835d-cb3bb5517932',
  description: `Marvel's sorcerers invoke Rituals of awesome power, anchored by mystic talismans. This is represented with a special type of Artifact appearing for the first time in this set: Ritual Artifacts. These follow all the normal Artifact rules above with some new twists.
<ul>
  <li>They say things like “Ritual Artifact — If you drew a card: You may discard this Artifact to get +3 Attack.”</li>
  <li>If you have fulfilled the listed Ritual condition this turn, you can discard the Ritual Artifact to get the listed effect.</li>
  <li>You don't have to use the Ritual Artifact even if you fulfill the Ritual condition. You might want to save it for a future turn instead of discarding it to use now.</li>
  <li>You can use as many Ritual Artifacts as you wish in a turn, including using multiple Ritual Artifacts with the same name. If you draw one card, that's enough to use the Rituals of multiple Artifacts that each have the condition “Draw a card.”</li>
  <li>If you use a “draw a card” ability, and it draws you a Ritual Artifact with the condition “draw a card,” then you can play that Artifact and use it right away. It's ok that the Artifact wasn't in play when you fulfilled the Ritual condition earlier in the turn.</li>
  <li>If a card lets you “copy” a Ritual Artifact card or “play a copy of it,” then you can use its Ritual effect (or "Thrown Artifact" or "Once per turn" Artifact ability) once, and you don't need to fulfill the ritual condition. You don't need to immediately discard the copy card to use the Ritual. The copy doesn't stay in play as an Artifact.</li>
</ul>`,
};

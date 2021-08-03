import { HIDDEN_WITNESS, INVESTIGATE } from './baseKeywords';
import { HeroClass } from '../enums';
import { IKeyword } from './keyword.interface';

export const Investigate: IKeyword = {
  ...INVESTIGATE,
  description: `This keyword represents hard-bitten Noir detectives investigating mysteries and searching for evidence and allies.
<ul>
<li>Some cards say things like "Investigate for a ${HeroClass.TECH} card." That means "Look at the top two cards of your deck. Reveal a ${HeroClass.TECH} card from among them and draw it. Put the rest of those cards back on the top and/or bottom of your deck in any order." Other abilities let you investigate for cards with certain costs, teams, icons, or other traits. (You only get to draw one card even if both cards match the Investigation. If at least one card matches, you must reveal and draw one card.)</li>
<li>Whether your investigation finds the right kind of card or not, you can still decide which cards go back on the top or bottom of your deck. This lets you set up your next Investigation or make powerful combos with other abilities that care about the top card of your deck. (The cards that that you put back can be broken up between the top and bottom of your deck.)</li>
<li>Some abilities tell you to investigate entirely different decks, like the Villain, Hero, and Bystander Decks. They will tell you what to do with the card you find. Like before, put the rest of the cards you looked at back on the top and/or bottom of that deck in any order.</li>
</ul>`,
};

export const HiddenWitness: IKeyword = {
  ...HIDDEN_WITNESS,
  description: `This keyword represents Villains and Masterminds hiding behind layers of informants, victims, and stooges. To find these Villains, you must track down and interview Hidden Witnesses who know their locations.
<ul>
<li>Some Villains say things like "Ambush: This Villain captures 2 Hidden Witnesses." This means the Villain captures the top 2 cards of the Bystander Stack, face-down, as Hidden Witnesses. You can't fight a Villain while it has a Hidden Witness.</li>
<li>During your turn you can pay 2 Recruit to rescue a Hidden Witness any number of times and put it in your Victory Pile.</li>
<li>Hidden Witnesses still count as Bystanders. When you rescue one, you get any special "When you rescue this Bystander ..." effect written on it. It stays in your Victory Pile as a normal, face-up Bystander.</li>
<li>A Villain can have face-up Bystanders and face-down Hidden Witnesses at the same time. You'll need to pay to rescue the face-down Hidden Witnesses. Then, you can fight the Villain, which will automatically rescue the face-up Bystanders.</li>
<li>If a Villain escapes with any number of Bystanders, including Hidden Witnesses, it will cause all players to discard a single card, just like a Villain escaping with any normal Bystanders. Hidden Witnesses carried away by escaping Villains stay in the Escape Pile as normal, face-up Bystanders.</li>
<li>You can pay to rescue Hidden Witnesses even if you're not going to fight that Villain during that turn. You can also rescue just some of the Hidden Witnesses and leave others for later.</li>
<li>If a special ability lets you "Defeat a Villain for free," you automatically rescue all the Hidden Witnesses on it without paying Recruit.</li>
<li>Masterminds and Schemes can have Hidden Witnesses on them too. They work the same way.</li>
</ul>`,
};

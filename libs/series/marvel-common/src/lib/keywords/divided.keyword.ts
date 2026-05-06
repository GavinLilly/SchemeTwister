import { HeroClass, IKeyword } from '@schemetwister/libtwister';

export const DIVIDED: IKeyword = {
  name: 'Divided',
  id: '78e28956-9020-410f-8c65-45e9aa817fa4',
  description: `Matching the theme of division and duality, Civil War introduces "Divided Cards," which have two miniature cards printed on the same card.
<ul>
<li>You recruit a Divided Card from the HQ as normal by paying its cost. Each side of a Divided Card shows the same cost. (If it costs "3" on each side, you pay only 3 Recruit, not 6.)</li>
<li>When you play a Divided Card, you choose which side to play. You generate all the Recruit, Attack, and special abilities of that side as normal. You ignore the other side, as if it doesn't exist.</li>
<li>Each side of a Divided Card has a different Hero Class, like ${HeroClass.STRENGTH} or ${HeroClass.RANGED}. You can play the ${HeroClass.STRENGTH} side to get ready to use a Superpower Ability that triggers on ${HeroClass.STRENGTH} cards later in your turn.</li>
<li>Different sides of Divided Cards often let you choose between Recruit, Attack, drawing cards, and other effects. Choose carefully which side to play!</li>
<li>While a Divided Card is in your hand or the HQ, it counts as all its Hero Classes, Teams and Hero Names. But once you play it, the card only counts as the side you chose.</li>
<li>When sorting and setting up, always use the Hero Name on the left side of a Divided Card.</li>
<li>A Divided Card is one card, not two. So if you have to "discard two cards," "draw two cards," or count the number of cards in your hand, a Divided Card only counts as one card.</li>
</ul>`,
};

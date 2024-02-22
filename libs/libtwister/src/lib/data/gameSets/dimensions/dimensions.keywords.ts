import { IKeyword } from '../../../model';
import { KeywordName } from '../../keywordName.enum';
import { INVESTIGATE as NoirInvestigate } from '../noir/noir.keywords';

export const SWITCHEROO: IKeyword = {
  name: KeywordName.SWITCHEROO,
  id: '7c69c203-efd6-409f-aa3f-2ae0e048478e',
  description: `This new keyword represents how Heroes like Squirrel Girl and Jessica Jones unpredictably switch up their tactics. Sometimes they instantly switch to new fighting stances, while other times they switch in new Heroes altogether.
<ul>
  <li>Some Hero cards say things like "Switcheroo 4."</li>
  <li>This means “You can reveal this card from your hand and put it on the bottom of the Hero Deck. If you do, you may put a Hero of the specified printed cost from the HQ into your hand.”</li>
  <li>So when you have a Switcheroo card in your hand, you can choose to play it for its normal Recruit, Attack, and other effects. Or you can choose to permanently swap it for another card in the HQ instead.</li>
  <li>You use Switcheroo instead of playing the card. So when you Switcheroo, you don't get any Recruit, Attack, or other effects from the Switcheroo card that you put on the bottom of the Hero Deck.</li>
  <li>Remember: You put the Switcheroo card on the bottom of the collective Hero Deck on the board – not your personal deck.</li>
  <li>It's totally fine to Switcheroo into a card of a different Hero Name.</li>
  <li>You can only use Switcheroo during your turn, when you could play cards from your hand. So you can't use it during other players' turns, and you can't use it while playing a card from the Villain Deck, like during a Master Strike, Scheme Twist, or Villain's Ambush ability.</li>
  <li>You can't Switcheroo into S.H.I.E.L.D. Officers or Sidekicks, since they aren't in the HQ.</li>
  <li>Switcheroo doesn't count as “recruiting” a Hero, so you can't use abilities like Wall-Crawl or Soaring Flight when you Switcheroo.</li>
  <li>Switcheroo uses the “printed cost” of cards in the HQ, so even if special abilities make cards in the HQ cost more or less, Switcheroo still uses the cost number literally printed on the card.</li>
</ul>`,
};

export const INVESTIGATE: IKeyword = {
  name: KeywordName.INVESTIGATE,
  id: 'a326b420-a172-4dbd-bf31-f43a7085fc83',
  description: `${NoirInvestigate}
  This keyword represents hard-bitten detectives like Jessica Jones investigating mysteries and searching for evidence and allies. Squirrel Girl has her furry friends investigate for her, while Ms. America investigates dimensional disruptions.
<ul><li>Note that Howard the Duck is also a private investigator. Many of his cards work similarly to the Investigate keyword and combine well with Investigate cards. However, Howard doesn't literally Investigate, since his cards originally came out in Marvel 3D before Investigate existed.</li></ul>`,
};

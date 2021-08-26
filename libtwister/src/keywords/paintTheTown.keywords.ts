import { FEAST, WALL_CRAWL } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const WallCrawl: IKeyword = {
  ...WALL_CRAWL,
  description: `The new "Wall-Crawl" keyword lets Heroes set up powerful combos by placing cards at the top of their decks. "Wall-Crawl" means:
"When you recruit this Hero, you may put it on top of your deck."
With Wall-Crawl, you get to use your new Hero much faster than you would if that Hero went in your discard pile. Keep an eye out for powerful combos you can create if you recruit a Wall-Crawl Hero early in your turn, before you play cards that reveal the top card of your deck.
<ul><li>Remember: When you use Wall-Crawl to put a card on top of your deck, don't use any other abilities on that card until it gets drawn from your deck. If you "gain" a Hero through some special ability like Skrull Shapeshifters, you can't use Wall-Crawl because you didn't "recruit" that Hero.</li></ul>`,
};

export const Feast: IKeyword = {
  ...FEAST,
  description: `Feast: The new Mastermind Carnage and his "Maximum Carnage" followers use the gruesome new Feast keyword. "Feast" states that when you fight a Villain or Mastermind with this ability you treat it as a fight effect. IE:
"Feast" = "Fight: KO the top card of your deck."
Some Maximum Carnage Villains create special effects when they feast on certain cards
<ul>
<li>Carnage's Master Strike starts with "Feast on each player." That means each player does the "Feast" effect. Then Carnage's Master Strike causes Wounds when he feasts on certain cards.</li>
<li>Note that Carnage's Master Strike is the only effect that feasts on every player. The "Maximum Carnage" Villains and Carnage's Mastermind Tactics each feast on only one player.</li>
<li>While Carnage's Master Strike causes Wounds, the Feast abilities on his Mastermind Tactics and most of his Villains don't cause Wounds.</li>
</ul>`,
};

import { COORDINATE, DANGER_SENSE, STRIKER } from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const DangerSense: IKeyword = {
  ...DANGER_SENSE,
  description: `This keyword represents Spider-Man using his famous "Spider-Sense" superpower to detect danger and evade it. It also covers Tony Stark, Happy Hogan, and Vulture watching for threats and rapidly reacting to them.
<ul>
  <li>Some cards say things like "Danger Sense 2." This means "Reveal the top 2 cards of the Villain Deck. You get +1 Attack for each Villain you revealed. Put all the cards back on top in any order."</li>
  <li>Cards can say Danger Sense 1, 2, 3, or even 4, revealing that many cards.</li>
  <li>Several Danger Sense cards also say they have additional effects when they reveal particular kinds of cards.</li>
  <li>Sometimes you can use one Danger Sense card to put a particular card on top of the Villain Deck, and then use a different Danger Sense card to benefit from that card being on top of that deck.</li>
  <li>Danger Sense can also be a good way to delay nasty Scheme Twists, Master Strikes, and powerful Villains. But you won't be able to avoid them forever!</li>
</ul>`,
};

export const Striker: IKeyword = {
  ...STRIKER,
  description: `This keyword represents Villains and Masterminds that get more confident and powerful as the Mastermind smashes Heroes. It means "This gets +1 Attack for each Master Strike in the KO pile and/or stacked next to the Mastermind."
<ul>
  <li>A couple of Hero cards also have the Striker ability and give you +Attack the same way.</li>
  <li>A couple of cards say "Double Striker," meaning they get +2 Attack per Strike, or even "Triple Striker" meaning +3 Attack per Strike.</li>
</ul>
By default, most Master Strikes go to the KO pile when they occur. However, some Masterminds specifically put their Master Strikes in unusual places. Striker also counts all face-up Master Strike cards in any of these unusual places. For example, for these Masterminds:
<ul>
  <li>Galactus - Count Master Strikes in the city.</li>
  <li>Macho Gomez - Count Master Strikes in front of all players.</li>
  <li>Deathbird - Count Master Strikes in the city, Escape Pile, and all players' Victory Piles.</li>
  <li>Mysterio - Count Master Strikes in all players' Victory Piles. Don't count Master Strikes shuffled into his Tactics, since they're not face up.</li>
</ul>`,
};

export const Coordinate: IKeyword = {
  ...COORDINATE,
  description: `This keyword represents how Tony Stark and May Parker act as mentors to Spider-Man in the movie, helping him reach his full potential and become a true hero.
Coordinating allows you to let another player "borrow" one of your cards. It is a critical way to help other players defeat tough enemies. During another player's turn, you can Coordinate with them like this:
<ul>
  <li>Discard a Coordinate card from your hand and then draw a new card to replace it.</li>
  <li>That player can now play a copy of the card you coordinated with them. (A copy counts as playing the exact same card including its Attack, Recruit, special abilities, and Hero Class symbol.)</li>
</ul>
You can only Coordinate one card to each player on their turn. However, multiple players can each Coordinate one card to the player whose turn it is, in order to give that player a huge advantage.
<ul>
  <li>If you are playing a solo game, once per turn, you may discard a card with Coordinate to draw a card.</li>
  <li>Coordinate is printed on cards in red text to make it easier to notice during other players' turns.</li>
  <li>When you offer to Coordinate a card to another player, that player can decline. If so, you don't discard that card and that player doesn't play a copy of it.</li>
  <li>If you are playing with the Final Showdown, you can't Coordinate during that Showdown.</li>
</ul>`,
};

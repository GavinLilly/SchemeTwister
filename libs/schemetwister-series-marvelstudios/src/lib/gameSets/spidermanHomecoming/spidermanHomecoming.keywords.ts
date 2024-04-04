import { IKeyword } from '@schemetwister/libtwister';

export const STRIKER: IKeyword = {
  name: 'Striker',
  id: '28c90a68-7f4c-44a7-9fe6-42c035bd9d6e',
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

export const COORDINATE: IKeyword = {
  name: 'Coordinate',
  id: '16e8df49-6b31-4ea6-9dff-2c3c780ff140',
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

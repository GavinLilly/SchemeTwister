import { IKeyword } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const WHEN_RECRUITED: IKeyword = {
  name: KeywordName.WHEN_RECRUITED_ABILITIES,
  id: 'f8d19499-7250-459b-90c2-693c5e082552',
  description: `The Inhumans' powerful decision to go to war is shown with new special abilities they use "When Recruited."
<ul>
  <li>Some Heroes say things like: "When Recruited: You get +3 Attack." Use this "When Recruited" ability immediately when you recruit this Hero.</li>
  <li>You pay the Hero's normal recruit cost, move it from the HQ into your discard pile, and refill that HQ space with a card from the Hero Deck. When all that is done, then you must use then "When Recruited" ability.</li>
  <li>When you play that card from your hand in later turns, don't use the "When Recruited" ability again. Instead, use the card's normal abilities, Recruit, and Attack. A horizontal line seperates the "When Recruited" ability from the card's normal abilities.</li>
  <li>If a special ability tells you to "gain" a Hero or "put" a Hero somewhere, then you don't use that Hero's "When Recruited" ability, since you didn't pay Recruit and you didn't recruit that Hero. This is true even if the special ability tells you to "gain" the Hero from the HQ.</li>
  <li>However, you do use the "When Recruited" ability if a special ability lets you "recruit a Hero for free" or recruit it at a reduced cost or from some unusual place, since then you are still recruiting the Hero.</li>
  <li>You may wish to keep some Heroes in the HQ until you especially need their "When Recruited" ability.</li>
</ul>`,
};

export const THRONES_FAVOR: IKeyword = {
  name: KeywordName.THRONES_FAVOR,
  id: 'd6df3c53-c5d1-414f-8334-6ef61a502a7f',
  description: `<ul>
  <li>Some Heroes say "You gain the Throne's Favor." When this happens, take a nearby object to represent the Throne's Favor in the game. If another player or Mastermind already has the Throne's Favor, and you gain it, then you take it from them.</li>
  <li>If an ability tells you to gain the Throne's Favor, you must take it. You cannot leave it where it is.</li>
  <li>Some Heroes say things like "You may spend the Throne's Favor to draw two cards." This means if you have the Throne's Favor, you may give it up to use the listed ability. You set aside the Throne's Favor object, and no one has the Throne's Favor until someone gains it again.</li>
  <li>You can only spend the Throne's Favor at the moment the card tells you to do so. You can't wait and spend it later in the turn.</li>
  <li>Masterminds and Villains in this set have abilities that can cause the Mastermind to gain the Throne's Favor and/or benefit from having it. Then the Mastermind gains the Throne's Favor, they take it away form any player that may already have it.</li>
  <li>The Throne's Favor is not a card. It never goes into decks or discard piles. Instead, when it comes up, just use whatever cool object is easily at hand. There's no need to store a special Throne's Favor object with the game.</li>
</ul>`,
};

export const ABOMINATION: IKeyword = {
  name: KeywordName.ABOMINATION,
  id: 'ef8b589b-b026-4f60-a74e-5748fd886e31',
  description: `Some Inhuman Villains have become horrific, unpredictable, and even monstrous. Accordingly, they use the "Abomination" keyword that debuted in Legendary: Captain America 75th Anniversary in 2016.
<ul>
  <li>There are also a few new twists on the Abomination keyword. The Hero Gorgon has abilities like "Sewers Abomination." It gives Attack equal to the printed Attack of the Hero in the HQ space under the Sewers.</li>
  <li>The highly-evolved Mastermind Maximus and Gorgon also use "Highest Abomination." This gives Attack equal to the highest printied Attack of any single card in the HQ. So if the five Heroes in the HQ have printed Attack of 2, 4, 3+, 0+, and no printed Attack, then Highest Abomination would give 4 Attack.</li>
  <li>"DoublevAbomination" double the Attack bonus.</li>
  <li>Some "Divided Cards" from sets like Legendary: Civil War have two printed Attack numbers, one on each side. If you need to know that card's "printed Attack," and the card is not currently being played, add both those Attack numbers together. This applies to Abomination and Berserk (from Legendary: X-Men).</li>
</ul>`,
};

export const CHOOSE_A_VILLAIN_GROUP: IKeyword = {
  name: KeywordName.CHOOSE_A_VILLAIN_GROUP,
  id: '66cbe335-c8ee-48ee-9991-59e47298f765',
  description: `Some Karnak cards say things like "Choose a Villain Groups. You get +1 Attack for each Villain in your Victory Pile from that Group." For example, you can choose the Villain Group "Inhuman Rebellion."
<ul>
  <li>You can also count a Henchman Villain Group like "Doombot Legion." However, you can't choose the generic word "Henchmen" and count Villains from multiple Henchmen Groups at once.</li>
  <li>You also can't count two Villain Groups at once by choosing a word or phrase that appears in both Villain Groups. For example, if you choose the "Hydra" Villain Group, you can't also count "Hydra Elite" Villains. They are not the same Villain Group.</li>
  <li>You can't count cards that have no Villain Group, like Tactics, Bystanders, Master Strikes, Scheme Twists, or Heroes that were turned into Villains.</li>
  <li>Traps and Locatons from other from other sets aren't Villains, so they don't count, even if that Trap turned into a Villain.</li>
</ul>`,
};

import { HeroClass } from '../enums';
import { CosmicThreat as FFCosmicThreat } from './fantasticFour.keywords';
import { Shards as GOTGShards } from './gaudiansOfTheGalaxy.keywords';

import {
  BURNING_SHARDS,
  CELESTIAL_BOONS,
  CONTEST_OF_CHAMPIONS,
  DANGER_SENSE_ON_VILLAINS,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Shards: IKeyword = {
  ...GOTGShards,
  description: `${GOTGShards.description}
---
There is no limit to the number of Shards that can be in the game at once. (This is a change from the past, when the number of Shards was limited.)`,
};

export const BurningShards: IKeyword = {
  ...BURNING_SHARDS,
  description: `As a new ability in this set, some Heroes say things like "Burn 2 Shards: Draw two cards."
<ul>
<li>This means: Once this turn, you may spend that many Shards to do the listed effect.</li>
<li>You can wait to use this until later in the turn.</li>
<li>You don't get the normal +1 Attack per Shard when you burn the Shards this way.</li>
</ul>`,
};

export const DangerSenseOnVillains: IKeyword = {
  ...DANGER_SENSE_ON_VILLAINS,
  description: `The arrival of the Black Order of Thanos often signals a world's imminent destruction. Although that world can sense grave danger approaching, they are often powerless to stop it. The Black Order work together to guard each other and their lord. To represent this, these Villains use Danger Sense in a new way.
<ul>
<li>Some cards say "Ambush: Danger Sense 2, helping all Black Order Villains and the Mastermind."</li>
<li>To do this, reveal the top cards of the Villain Deck and rearrange them, just like normal Danger Sense. However, the +1 Attack bonus for each Villain card revealed is gained by all Black Order Villains in the city and the Mastermind this turn, instead of being gained by a player.</li>
<li>This bonus wears off at the end of the turn.</li>
</ul>`,
};

export const CelestialBoons: IKeyword = {
  ...CELESTIAL_BOONS,
  description: `The Celestials are millions of years old and immeasurably powerful. They cannot be truly defeated by mere mortals. However, if you manage to fight a celestial, it is impressed with your efforts and grants you a Celestial Boon. This is a permanent bonus that helps you for the rest of the game, as long as the Celestial is in your Victory Pile. You can use multiple Celestial Boons, even multiple copies of the same one.`,
};

export const ContestOfChampions: IKeyword = {
  ...CONTEST_OF_CHAMPIONS,
  description: `The Grandmaster and the Elders of the Universe are literally immortal. To them, mortals are merely playthings. This is shown with the new Contest of Champions keyword. Some Villains and Masterminds say things like "Ambush: Contest of Champions ${HeroClass.STRENGTH}." When this happens:
<ul>
<li>Each player in turn reveals a single card, either from their hand, or the top of their deck. That player announces their "Contest Score," which is that card's printed cost, doubled if it's a ${HeroClass.STRENGTH} card.</li>
<li>You must choose carefully whether to use the best score you have from your hand, or to take a risk by trying the top card of your deck instead.</li>
<li>After all players have announced their Contest Score, then Evil tries to win the contest. Reveal the top two cards of the Hero Deck, and Evil uses whichever card gives the highest Contest Score (taking account of any doubling). Again, this is the card's printed cost, doubled if it's a ${HeroClass.STRENGTH} card. Then put both those cards on the bottom of the Hero Deck.</li>
<li>Whichever score is highest (or tied for highest) "wins" the contest. Everyone else "loses."</li>
<li>For example, in a 3-player game, say Alana's score is 6, Piper's score is 6, Melody'd score is 4, and Evil's score is 6. The Alana, Piper, and the Mastermind all win the contest, and Melody loses the contest.</li>
<li>The card lists outcomes for winning and losing.</li>
<li>A few cards reveal a Hero card and use its colors for a contest. This can create contests that are multicolor, such as "Contest of Champions ${HeroClass.TECH}, ${HeroClass.RANGED}." In this case, any card that includes either ${HeroClass.TECH} or ${HeroClass.RANGED} will match the contest and have its score doubled. (A card that's both ${HeroClass.TECH} and ${HeroClass.RANGED} won't be quadrupled.)</li>
<li>Some contests say that Evil reveals 4 or 6 cards from the Hero Deck. Evil's Contest Score is still the highest-scoring single card.</li>
</ul>`,
};

export const CosmicThreat: IKeyword = {
  ...FFCosmicThreat,
  description: `${FFCosmicThreat.description}
---
<ul>
<li>The Celestials say things like "Cosmic Threat ${HeroClass.STRENGTH} or ${HeroClass.INSTINCT}." You can choose to use either ${HeroClass.STRENGTH} or ${HeroClass.INSTINCT} cards for its Cosmic Threat in a single turn, but you can't use both to reduce its Attack.</li>
<li>If you try to fight a Mastermind with Cosmic Threat a second time in the same turn, it will return to its full Attack, and you cannot use any Cosmic Threat abilities against it in additional fights that turn.</li>
<li>You can use the same ${HeroClass.RANGED} cards to reduce the Attack on different "Cosmic Threat ${HeroClass.STRENGTH} or ${HeroClass.INSTINCT}" Villains in one turn.</li>
</ul>`,
};

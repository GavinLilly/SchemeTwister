import { IKeyword, HeroClass } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const HYPERSPEED: IKeyword = {
  name: KeywordName.HYPERSPEED,
  id: '24123aba-910f-4440-9529-6a9dd1a448ca',
  description: `This new keyword represents how Heroes like Quicksilver and Speed move blindingly fast, battering opponents with a flurry of unpredictable strikes. It also includes hyperspeed flight, hypersonic cannons and hyper-fast volleys of arrows.
<ul>
  <li>Some Hero cards say things like "Hyperspeed 5." This means "Reveal the top 5 cards of your deck. You get +1 Attack for each card with an Attack icon you revealed this way. Discard all those cards."</li>
  <li>It doesn't matter what numbers are in the Attack icons. Ignore Recruit and other icons on the revealed cards.</li>
  <li>When building a deck with lots of Hyperspeed, you will want as many cards with Attack icons as you can get - including cards with "0+" printed inside their Attack icon.</li>
  <li>You can also cleverly use abilities that let you set up the top card of your deck to have an Attack icon right before you play a card with Hyperspeed.</li>
  <li>Some cards explicitly tell you to "Hyperspeed 3 for Recruit." This means "Reveal the to 3 cards of your deck. You get +1 Recruit for each card with a Recruit icon you revealed this way. Discard all those cards."</li>
  <li>Finally, some cards say "Hyperspeed 3 for Recruit and Attack." In this case, if you revealed one card with a Recruit icon and two cards that each had Recruit and Attack icons, you would get +3 Recruit and +2 Attack. Cards with both Recruit and Attack icons can be very useful with Hyperspeed!</li>
</ul>`,
};

export const DARK_MEMORIES: IKeyword = {
  name: KeywordName.DARK_MEMORIES,
  id: 'b2fc719e-ff69-4053-b6bf-17e1a42467b0',
  description: `In the theme of Revelations, this new keyword represents the way The Hood and his gang find every dark secret in a Hero's past and use it against them.
<ul>
  <li>Some Villains and Masterminds have the keyword "Dark Memories." This means "This gets +1 Attack for each Hero Class among cards in your discard pile."</li>
  <li>Likewise, some Hero cards like Ronin and Scarlet Witch also have "Dark Memories," drawing power from the tragedies of their pasts. Playing a Hero card with this keyword gives you that same bonus: "You get +1 Attack for each Hero Class among cards in your discard pile."</li>
  <li>The Hero Classes are ${HeroClass.STRENGTH}, ${HeroClass.INSTINCT}, ${HeroClass.COVERT}, ${HeroClass.TECH}, and ${HeroClass.RANGED}, so Dark Memories can give anywhere from +0 Attack to +5 Attack. Grey cards like S.H.I.E.L.D. Agents don't have a Hero Class.</li>
  <li>It doesn't matter how many cards of a particular Hero Class you have in your discard pile. So if your discard pile were three ${HeroClass.STRENGTH} cards, four ${HeroClass.INSTINCT} cards, and five grey S.H.I.E.L.D. Agents, Dark Memories would give you +2 Attack.</li>
  <li>Recruiting Heroes, Hyperspeed, and other discard abilities may increase the Dark Memories bonus. Likewise, if you draw of reveal enough cards that you have to shuffle your discard pile to make a new deck, the Dark Memories bonus will go back to +0 Attack. Time your plays and build your deck carefully to turn Dark Memories to your advantage!</li>
  <li>You can minimize the Attack of The Hood and his gang by building a deck with very few Hero Classes. Or you can maximize the Attack of Heroes with Dark Memories by recruiting many Hero Classes.</li>
  <li>"Double Dark Memories" means double the bonus.</li>
</ul>`,
};

export const LAST_STAND: IKeyword = {
  name: KeywordName.LAST_STAND,
  id: '9a556d5e-98d6-4ffc-b50c-1d219e7b57d9',
  description: `This new keyword represents how a Dark Avenger fights hardest when all alone, back to a wall, making a last stand. Treacherous and cruel , they don't understand the teamwork of the real Avengers.
<ul>
  <li>Some Villains say "Last Stand." This means "This gets +1 Attack for each empty space in the city."</li>
  <li>Some Captain Marvel and Photon cards also say "Last Stand," representing how they fight their hardest near the end of battle. Likewise, this means "You get +1 Attack for each empty space in the city."</li>
  <li>Choose the order you fight Villains carefully when Last Stand is in the game!</li>
  <li>If a Mastermind or Scheme causes a city space not to exist, that does not count as an "empty space."</li>
  <li>"Double Last Stand" means double the bonus.</li>
</ul>`,
};

export const LOCATIONS: IKeyword = {
  name: KeywordName.LOCATIONS,
  id: 'e084464c-f0b6-42fb-837c-1e89c28b59ad',
  description: `The Revelations set adds a completely new card type to Marvel Legendary" Locations. These cards represent infamous strongholds in the Marvel Universe. Every Villain Group in the set contains at least one Location.
<ul>
  <li>When a Location is played from the Villain Deck, place it above the nearest city space that does not have a Location. Leave enough room that Villains can move through the city as normal.</li>
  <li>Once placed, Locations don't move. Villains don't push Locations forward. You can have a Villain in a city space that has a Location above it.</li>
  <li>Most Locations specify special abilities that happen when you fight Villains in that space. Some Locations become stronger when there's a Villain in that space. Some Villains and Masterminds say they become stronger based on Locations.</li>
  <li>You can fight a Location by spending the listed amount of Attack, putting it into your Victory Pile, and doing any Fight ability the Location may have.</li>
  <li>If a new Location is played, and every city space already has a Location, then KO the Location with the lowest Attack to make room. (If tied, the current player chooses.) This might KO the newly played Location or one of the previous Locations.</li>
  <li>In 1-player solo mode, when a Location tells "each other player" to do something, do it yourself.</li>
</ul>
<b>Location Clarifications</b>
<ul>
  <li>Locations do not count as Villains. Special abilities that mention Villains do not work on Locations.</li>
  <li>If a Mastermind or Scheme destroys a city space with a Location, KO that Location.</li>
  <li>A city space with a Location above it and no Villains still counts as "empty" for abilities like Last Stand.</li>
  <li>Each Mastermind in the set has at least one Tactic that becomes a Location. You win when the Mastermind has no face down Tactics left under them. You don't also have to defeat all the Tactic cards that have turned into Locations in the city.</li>
  <li>Locations don't usually capture Bystanders, but some card abilities can make them capture Bystanders. Rescue them when you fight that Location.</li>
</ul>`,
};

export const DOUBLE_SIDED_TRANSFORMING_SCHEMES: IKeyword = {
  name: KeywordName.DOUBLE_SIDED_TRANSFORMING_SCHEMES,
  id: '4f15c508-0fcf-48b7-a86e-c9542e6d76fe',
  description: `In keeping with the Revelations theme, all the Schemes in this set are double-sided "Transforming Schemes." Start with the side face up that says "Setup." Whenever it tells you to "Transform this Scheme," flip it over. Use only the rules showing on the side currently face up.`,
};

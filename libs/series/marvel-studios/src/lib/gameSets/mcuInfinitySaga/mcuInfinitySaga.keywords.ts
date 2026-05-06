import { HeroClass, IKeyword } from '@schemetwister/libtwister';

export const SACRIFICE: IKeyword = {
  name: 'Sacrifice',
  id: 'a879a86c-479f-4445-b03d-cfb0b5e88347',
  description: `Several Heroes say things like "${HeroClass.RANGED} Sacrifice: Take another turn after this one. Don't play a card from the Villain Deck at the start of the turn."
- This means "You may KO this card to use its Sacrifice ability only if you played another ${HeroClass.RANGED} Hero Hero earlier this turn."
- Sacrificing is always optional: you don't have to use the Sacrifice ability and KO the card, even if you played the matching Hero Class earlier this turn. However, if you don't KO the Sacrifice card, you can't use the Sacrifice ability.
- You still get the normal Recruit, Attack, and any non-Sacrifice abilites from the card, whether you Sacrifice it or not.
- You have to choice whether to Sacrifice the card at the moment you play it. You can't wait then Sacrifice it later in the turn.
- If you Sacrifice it, you still "played it this turn," for triggering abilites like "${HeroClass.STRENGTH} Hero: You get +1 Attack," However, it's no longer "one of your Heroes" or "a Hero you have," since it has gone to the KO pile.`,
};

export const ENDGAME: IKeyword = {
  name: 'Endgame',
  id: 'f47d0730-76dc-43e9-880a-0e1c07aa568d',
  description: `- It is the "Endgame" whenever the Villain Deck holds 8 cards per player or fewer.
- This gives Enemies their Endgame Attack bonus or other listed Endgame abilities.
- Captain Marvel uses the Endgame keyword in the same way Enemies do.
- If you reach the Endgame and then cards are added back into the Villain Deck somehow, if might not be the Endgame anymore. If a Scheme has multiple Villain Decks, it is the Endgame if any of them are small enough.
- Some Enemies have special abilites that say "It is the Endgame this turn." This temporarily activates Engame abilites for all Heores and Enemies accross the game this turn.
- Captain Marvel also has a card which says "For the rest of this turn, it is the Endgame for your Hero cards." This turns on Heroes' Endgame abilities, but it does not activate Enemies' Endgmae abilities.`,
};

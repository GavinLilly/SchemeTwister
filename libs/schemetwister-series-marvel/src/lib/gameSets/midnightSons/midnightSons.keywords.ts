import { HeroClass, IKeyword } from '@schemetwister/libtwister';

import { MOONLIGHT_AND_SUNLIGHT as TNM_MOONLIGHT } from '../theNewMutants/theNewMutants.keywords';

export const BLOOD_FRENZY: IKeyword = {
  id: '915831d0-26ad-4683-bd0d-c9d9e4a3aca0',
  name: 'Blood Frenzy',
  description: `- Blood Frenzy on a Hero card means "You get +1 Attack for each different VP value you have among cards in your Victory Pile."
- Likewise on a Villain card, during your turn, Blood Frenzy means "This Villain gets +1 Attack for each different VP value you have among cards in your Victory Pile."
- It only matters how many different VP values you have among cards in your Victory Pile. It doesn't matter how many you have of any single value. So if your Victory Pile has cards worth 0, 1, 1, 1, 2, 2, and 5 VP, then Blood Frenzy would give +4 Attack.
- This includes Bystanders in your Victory Pile.
- Use whatever VP a card is worth, not just its printed VP. So if a Master Strike becomes "a Villain worth 4VP," then it counts as 4VP for Blood Frenzy. If an effect from another set puts a S.H.I.E.L.D. Agent with no printed VP value "Undercover in your Victory Pile worth 1VP," that's 1VP for Blood Frenzy.
- If a card gets into your Victory Pile somehow with no printed or specified VP value, it counts as "0 VP," which is a number that can help your Blood Frenzy.`,
};

export const HAUNT: IKeyword = {
  id: 'd0d5da8e-fb30-464e-8e1d-0a34ae356350',
  name: 'Haunt',
  description: `Zarathos and his Fallen can control Heroes' bodies like twisted puppets, saying things like "Ambush: This Villain Haunts the rightmost Hero in the HQ."
- This means: Tuck this Villain beneath that Hero, 'Haunting' it, so you can see the Villain's name. Players can't recruit the Haunted Hero while the Haunting Villain is under it.
- Instead, a player can spend Attack equal to the Haunted Hero's cost to "exorcise" that Haunted Hero. If a player does, they either KO the Haunted Hero or choose a player to gain it. Then the Haunting Villain enters the city, ignoring any Ambush effects it has.
- While a Villain is Haunting a Hero, you can't fight the Haunting Villain itself – you have to spend Attack to exorcise the Haunted Hero first, driving the Haunting Villain into the city so you can finish it off there.
- A Hero can't be Haunted by two Villains at once. Haunt abilities all say to Haunt an "unhaunted Hero."
- Zarathos's Master Strikes and Mastermind Tactics can cause him to Haunt Heroes in the same way.
Exorcizing that Hero drives Zarathos back to the Mastermind space.
- A “Haunted Hero” is still a Hero, so it can still be affected by things that affect Heroes in the HQ. A Villain escaping the city that KOs a Hero from the HQ (that costs 6 or less) can KO a Haunted Hero. Card effects that let you "gain a Hero from the HQ" or "Put a Hero from the HQ on the bottom of the Hero Deck" still work on Haunted Heroes. However, card effects that say "recruit a Hero from the HQ for free" don’t work on Haunted Heroes, since you can't recruit them.
- If something causes a Haunted Hero to leave the HQ, then the Haunting Villain stays in that HQ space and Haunts the new Hero that arrives to refill that HQ space.
- If an HQ space is "destroyed," KO any Haunted Hero there and the Haunting Villain there enters the city, ignoring any Ambush effects.`,
};

export const HUNT_FOR_VICTIMS: IKeyword = {
  id: 'cdf25fdb-bd5e-41ff-8259-aec80d00ef8c',
  name: 'Hunt for Victims',
  description: `Some sadistic Villains say "Ambush: Hunt for Victims."
- This means "KO a Bystander that is captured by any Enemy or from the Escape Pile. If you can't, then this captures a Bystander instead."
- If a player fights Lilith, and her Mastermind Tactic Hunts for Victims and captures a Bystander, the player doesn't immediately rescue that Bystander.`,
};

export const MOONLIGHT_AND_SUNLIGHT: IKeyword = {
  id: '28aaf12d-ba3c-4c0f-81d1-5a5585f84ada',
  name: TNM_MOONLIGHT.name,
  description: `${TNM_MOONLIGHT.description}
- "Haunted Heroes" are still Heroes, so they still count towards Moonlight and Sunlight.`,
};

export const ABILITIES_TRIGGERING_SEPARATELY: IKeyword = {
  id: '2304819f-a371-49be-ba38-0074066be78a',
  name: 'Abilities Triggering Separately',
  description: `Some Hero cards have Sunlight (or Patrol) ability, then a separate ability like "${HeroClass.RANGED} Hero: You get +1 Attack." on another line. Do each of a card's abilities, one at a time, in the order listed. The second ability doesn't require both Sunlight and a played ${HeroClass.RANGED} Hero card. Some Sunlight abilities can move cards out of the HQ. This might enable a Moonlight ability later on the card to activate too.`,
};

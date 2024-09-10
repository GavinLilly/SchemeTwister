import { IKeyword } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

export const SYMBIOTE_BONDS: IKeyword = {
  name: KeywordName.SYMBIOTE_BONDS,
  id: 'b3444ccb-69cc-4686-ba59-f1243ca7aaee',
  description: `This keyword represents how symbiotes like Hybrid, Riot, and Lasher bond with other characters, enhancing them with a dark shell. You must fight the combined strength of the host and symbiote to split them apart, then finish what remains in a second fight.
<ul>
  <li>Some Villains say things like "Ambush: A Henchman Villain from your Victory Pile Symbiote Bonds with Lasher."</li>
  <li>This means stack this card onto the specified Villain, combining them into a single Villain with both cards' Attack and text added together.</li>
  <li>To fight a Combined Villain, you must spend the total Attack of both Villain cards combined. Rescue all the Bystanders that Combined Villain had. Then put either one of the Villain cards from that Combined Villain into your Victory Pile and do that card's Fight effect. The other card from that Combined Villain stays in that city space, and you don't do its Fight effect.</li>
  <li>If a Combined Villain escapes, it's only a single escape, so it only KOs one Hero that costs 6 or less from the HQ. (If it's carrying any number of Bystanders, it makes all players discard a single card as normal.) Do the Escape abilities of both those Villain cards in any order. Once in the Escape Pile, they are two unattached Villains again.</li>
  <li>Keep one card of the Combined Villain tucked under the other, so you can see both cards' Attack and text.</li>
  <li>Since a Combined Villain has the text of both its Villain cards, it can get extra Attack or restrictions from various special abilities on either of its cards. It also counts as both cards' Villain Groups.</li>
  <li>Symbiote Bonds never combine more than two Villains in the same city space. Ignore any effect that would combine a third Villain in that space.</li>
  <li>Once two Villains are bonded, only fighting can break them up. Other Symbiote Bonds abilities can't break up a Combined Villain to attach one of the cards to something else.</li>
  <li>If a Symbiote Bonds ability puts a new Villain card into the city from the Villain Deck, Escape Pile, Victory Pile, etc., do any Ambush ability on the newly entering card. However, that Ambush ability won't be able to break up a Combined Villain or add a third card to it.</li>
  <li>If a special ability automatically "defeats" a Combined Villain, you still put just one of its cards into your Victory Pile and do that card's Fight effect.</li>
  <li>A combined Villain has the VP of both its cards combined. So you can spend Piercing Energy (from Legendary: X-Men) equal to both cards' total combined VP to fight the Combined Villain, putting one of its cards into your Victory Pile as normal.</li>
</ul>`,
};

export const POISION_VILLAINS: IKeyword = {
  name: KeywordName.POISON_VILLAINS,
  id: '9d47a131-579c-4c63-8d7a-a4b20d203f5d',
  description: `Poison Villains use Symbiote Bonds in a special way. For example, Poison Dr. Octopus says "Fight: This Symbiote Bonds with a Villain in the Bank. If already bonded or unable to bond, gain this as a Hero instead."
<ul>
  <li>So Dr. Octopus enters the city as a normal Villain. When you fight him, if there's a Villain in the Bank, then Poison Dr. Octopus will bond with that Villain. If there's no Villain in the Bank, then you gain Poison Dr. Octopus as a Hero instead, putting him in your discard pile.</li>
  <li>Once Poison Dr. Octopus becomes bonded, if you fight that Combined Villain, you choose one of the two Villains and do its Fight effect. If you choose Poison Dr. Octopus, then since he is currently bonded, you gain him as a Hero.</li>
  <li>When facing Poison Villains, be careful about when you fight them, so you can turn them into Heroes as soon as possible!</li>
</ul>`,
};

export const DIGEST: IKeyword = {
  name: KeywordName.DIGEST,
  id: 'a8528a9e-0068-4c17-84e8-bc45ba9ef7bc',
  description: `This grisly keyword represents how the Venom and Carnage symbiotes get stronger as they devour people and absorb their energy.
<ul>
  <li>Some Heroes say things like "Digest 2: Draw a card."</li>
  <li>Use this Digest ability only if you have at least that many cards in your Victory Pile.</li>
  <li>All kinds of cards in your Victory Pile count for Digest. This includes Henchman Villains, regular Villains, Bystanders, Mastermind Tactics, Traps from other sets, etc.</li>
  <li>You don't have to remove any cards from your Victory Pile to use Digest.</li>
  <li>Even if you have 10 cards in your Victory Pile, you can't use a card's "Digest 2" ability five times -- just once.</li>
</ul>`,
};

export const INDIGESTION: IKeyword = {
  name: KeywordName.INDIGESTION,
  id: '2c55da98-ad3c-4454-af76-63dcdd9dc572',
  description: `<ul>
  <li>If you don't have enough cards in your Victory Pile to use a card's Digest ability, use its Indigestion ability instead.</li>
  <li>For example, some Heroes say things like: "Digest 4: Draw two cards.
Indigestion: You get +2 Recruit."</li>
  <li>When you play this card, if you have at least 4 cards in your Victory Pile, then you use the Digest ability and draw two cards.</li>
  <li>If you have zero to three cards in your Victory Pile, then you use the Indigestion ability instead, getting +2 Recruit.</li>
  <li>If you have enough cards in your Victory Pile to use the Digest ability, you cannot choose to use the Indigestion ability instead.</li>
</ul>`,
};

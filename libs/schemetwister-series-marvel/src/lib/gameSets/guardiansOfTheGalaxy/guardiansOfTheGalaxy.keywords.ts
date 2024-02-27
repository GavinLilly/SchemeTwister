import { IKeyword } from '@schemetwister/libtwister';

export const SHARDS: IKeyword = {
  name: 'Shards',
  id: 'e4359ef4-6d89-457f-8e5a-1f38e2401fdf',
  description: `This set contains 18 "Shard" tokens. These tokens can be gained by players, Villains and Masterminds from the supply.
<ul>
<li>Players: When you gain a Shard, put it in front of you. You can spend a Shard to get +1 Attack (returning the Shard to the supply). If you don't use a Shard immediately, you can keep it for future turns and use it later. You can spend as many as you wish in a single turn. Shards do not have Victory Points.</li>
<li>Villains: When a Villain gains Shards, put them on that Villain from the supply. That Villain gets +1 Attack for each Shard it has. After you defeat a Villain, you take one of its Shards. Return the rest to the supply. When a Villain escapes, the Mastermind gains one of the Shards on that Villain. Return the rest to the supply.</li>
<li>Mastermind: When a Mastermind gains Shards, put them on that Mastermind from the supply. That Mastermind gets +1 Attack for each Shard it has. After you fight a Mastermind, you take one of its Shards. Return the rest to the supply. Then do the Fight effect on the Mastermind Tactic, which might give the Mastermind additional Shards for future fights.</li>
</ul>`,
};

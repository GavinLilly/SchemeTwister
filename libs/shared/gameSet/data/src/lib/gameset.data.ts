import { IGameSet } from '@legendizer/shared/gameSet/types';

export class GameSet implements IGameSet {
  public static LEGENDARY = new GameSet({
    id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d',
    name: 'Legendary (base set)'
  });

  private static VALUES: GameSet[] = [];
  id: string;
  name: string;

  private constructor(gameSet: IGameSet) {
    this.id = gameSet.id;
    this.name = gameSet.name;

    GameSet.VALUES.push(this);
  }

  public static values() {
    return GameSet.VALUES;
  }
}

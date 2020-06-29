import { IGameSet } from '@legendizer/api-interfaces';

export class GameSet implements IGameSet {
  id: string;
  name: string;

  public toString(): string {
    return this.id;
  }
}

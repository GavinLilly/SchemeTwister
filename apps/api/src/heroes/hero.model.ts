import { IHero, GameSet, Team } from '@legendizer/api-interfaces';
import { Length, Matches } from "class-validator";

export class Hero implements IHero {
  @Length(36)
  @Matches('[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')
  id: string;

  name: string;
  gameSet: GameSet;
  team?: Team;
}

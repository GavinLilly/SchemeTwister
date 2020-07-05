import { IGameSet } from '@legendizer/api-interfaces';
import { Matches, Length, IsString } from 'class-validator';
import { InMemoryDBEntity } from 'in-memory-db-uuid';

export class GameSetModel implements IGameSet, InMemoryDBEntity {
  @Length(36)
  @Matches('[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')
  id: string;

  @IsString()
  name: string;
}

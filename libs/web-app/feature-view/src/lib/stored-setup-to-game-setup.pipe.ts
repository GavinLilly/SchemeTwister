import { Pipe, PipeTransform } from '@angular/core';
import {
  GameSetup,
  LibTwister,
  LiteGameSetup,
} from '@schemetwister/libtwister';
import { IStoredGameSetup } from '@schemetwister/web-app/feature-setup-store';
import { plainToInstance } from 'class-transformer';

@Pipe({ name: 'storedSetupToGameSetup', })
export class StoredSetupToGameSetupPipe implements PipeTransform {
  transform(value: IStoredGameSetup, libTwister: LibTwister): GameSetup {
    const liteSetup = plainToInstance(LiteGameSetup, value);
    return liteSetup.toGameSetup(libTwister);
  }
}

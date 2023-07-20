import { Pipe, PipeTransform } from '@angular/core';
import { GameSetup, LiteGameSetup } from '@schemetwister/libtwister';
import { IStoredGameSetup } from '@schemetwister/web-app/shared';
import { plainToInstance } from 'class-transformer';

@Pipe({
  name: 'storedSetupToGameSetup',
})
export class StoredSetupToGameSetupPipe implements PipeTransform {
  transform(value: IStoredGameSetup): GameSetup {
    const liteSetup = plainToInstance(LiteGameSetup, value);
    return liteSetup.toGameSetup();
  }
}

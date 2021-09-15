import { Pipe, PipeTransform } from '@angular/core';
import { IDeck, IVillainDeck } from '@schemetwister/libtwister';

@Pipe({
  name: 'asVillainDeck',
})
export class AsVillainDeckPipe implements PipeTransform {
  transform(value: IDeck): IVillainDeck {
    return value as IVillainDeck;
  }
}

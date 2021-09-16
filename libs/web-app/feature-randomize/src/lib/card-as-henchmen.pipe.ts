import { Pipe, PipeTransform } from '@angular/core';
import { CardType, ICard, IHenchmen } from '@schemetwister/libtwister';

@Pipe({
  name: 'cardAsHenchmen',
})
export class CardAsHenchmenPipe implements PipeTransform {
  transform(value: ICard): IHenchmen {
    if (value.cardType === CardType.HENCHMEN) {
      return value as IHenchmen;
    }
    throw new Error('Card type is not a henchmen. Cannot convert');
  }
}

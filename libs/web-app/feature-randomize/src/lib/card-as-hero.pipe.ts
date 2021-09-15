import { Pipe, PipeTransform } from '@angular/core';
import { CardType, ICard, IHero } from '@schemetwister/libtwister';

@Pipe({
  name: 'cardAsHero',
})
export class CardAsHeroPipe implements PipeTransform {
  transform(value: ICard): IHero {
    if (value.cardType === CardType.HERO) {
      return value as IHero;
    }
    throw new Error('Card type is not a hero. Cannot convert');
  }
}

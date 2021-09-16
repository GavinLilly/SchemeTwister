import { Pipe, PipeTransform } from '@angular/core';
import { CardType, ICard, IMastermind } from '@schemetwister/libtwister';

@Pipe({
  name: 'cardAsMastermind',
})
export class CardAsMastermindPipe implements PipeTransform {
  transform(value: ICard): IMastermind {
    if (value.cardType === CardType.MASTERMIND) {
      return value as IMastermind;
    }
    throw new Error('Card type is not a mastermind. Cannot convert');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asVillainDeck'
})
export class AsVillainDeckPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { IPlayableObject } from '@schemetwister/libtwister';

@Pipe({
  name: 'sortByName',
  standalone: true,
})
export class SortByNamePipe implements PipeTransform {
  transform(value?: IPlayableObject[]): IPlayableObject[] | undefined {
    if (value === undefined) {
      return undefined;
    }

    value.sort((a, b) => a.name.localeCompare(b.name));
    return value;
  }
}

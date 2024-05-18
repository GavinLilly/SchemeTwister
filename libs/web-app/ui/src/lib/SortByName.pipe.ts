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

    return value.toSorted((a, b) => a.name.localeCompare(b.name));
  }
}

import { Pipe, PipeTransform } from '@angular/core';

import { INamedObject } from '@schemetwister/libtwister';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {
  transform(value?: INamedObject[]): INamedObject[] | undefined {
    if (value === undefined) {
      return undefined;
    }

    return value.toSorted((a, b) => a.name.localeCompare(b.name));
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  transform(
    value: string,
    strToReplace: string,
    replacementStr: string
  ): string {
    if (!value || !strToReplace || !replacementStr) {
      return value;
    }

    return value.replace(
      new RegExp(this.escapeStr(strToReplace), 'g'),
      replacementStr
    );
  }

  escapeStr(str: string) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
}

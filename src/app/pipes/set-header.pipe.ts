import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setHeader'
})
export class SetHeaderPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (!value || value.length === 0) {
      return [];
    }
    return Object.keys(value[0]);
  }

}

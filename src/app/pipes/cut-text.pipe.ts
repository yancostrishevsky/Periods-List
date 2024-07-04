import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, maxLenght: number): string {
    if(!value) return '';
    if (value.length <= maxLenght) return value;
    return value.substring(0, maxLenght) + "...";
  }
}

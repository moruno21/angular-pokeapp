import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espacioGuion'
})
export class EspacioGuionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let re = /\-/gi;
    return value.replace(re, ' ');
  }

}

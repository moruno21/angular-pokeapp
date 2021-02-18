// Cuando daba el error 'Uncaught TypeError: Cannot read toLowerCase of undefined'
// Basta con añadir el if en el pipe para que retorne undefined en el caso en el que value sea undefined



import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (typeof(value) === 'undefined') return 'undefined';
    value = value.toLowerCase();
    let nombre : string = value;
    return nombre[0].toUpperCase() + value.substr(1);

  }
}

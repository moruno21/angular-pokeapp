import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
    if(arg === '') return value;
    const pokemonsBuscados = [];
    for (const pokemon of value){
      if(pokemon.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        pokemonsBuscados.push(pokemon);
      }
    }

    // indexOf devuelve un indice dentro de un objeto con la primera ocurrencia
    // Si devuelve -1 es que no ha encontrado ninguna ocurrencia

    return pokemonsBuscados;
  }

}

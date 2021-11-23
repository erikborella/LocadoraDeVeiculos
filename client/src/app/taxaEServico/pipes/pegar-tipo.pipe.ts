import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pegarTipoTaxa'
})
export class PegarTipoTaxaPipe implements PipeTransform {

  transform(ehFixo: boolean): string {
    return (ehFixo) ? "Valor fixo": "Valor por dia";
  }

}

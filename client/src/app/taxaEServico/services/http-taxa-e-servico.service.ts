import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { TaxaEServicoCreateViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoCreateViewModel';
import { TaxaEServicoDetailViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoDetailViewModel';
import { TaxaEServicoEditViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoEditViewModel';
import { TaxaEServicoListViewModel } from 'src/app/shared/viewModels/taxaEServico/TaxaEServicoListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpTaxaEServicoService extends HttpApiBase<TaxaEServicoListViewModel,
                                                         TaxaEServicoDetailViewModel,
                                                         TaxaEServicoCreateViewModel,
                                                         TaxaEServicoEditViewModel>{

  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/taxaEServico");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { PessoaJuridicaCreateViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaCreateViewModel';
import { PessoaJuridicaDetailComponent } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaDetailsViewModel';
import { PessoaJuridicaEditViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaEditViewModel';
import { PessoaJuridicaListViewModel } from 'src/app/shared/viewModels/pessoaJuridica/PessoaJuridicaListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpPessoaJuridicaService extends HttpApiBase<PessoaJuridicaListViewModel,
                                                           PessoaJuridicaDetailComponent,
                                                           PessoaJuridicaCreateViewModel,
                                                           PessoaJuridicaEditViewModel> {

  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/pessoajuridica");
  }
}

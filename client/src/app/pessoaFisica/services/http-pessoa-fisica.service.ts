import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { PessoaFisicaCreateViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaCreateViewModel';
import { PessoaFisicaDetailViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaDetailViewModel';
import { PessoaFisicaEditViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaEditViewModel';
import { PessoaFisicaListViewModel } from 'src/app/shared/viewModels/pessoaFisica/PessoaFisicaListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpPessoaFisicaService extends HttpApiBase<PessoaFisicaListViewModel,
                                                         PessoaFisicaDetailViewModel,
                                                         PessoaFisicaCreateViewModel,
                                                         PessoaFisicaEditViewModel> {

  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/pessoaFisica");
  }
}

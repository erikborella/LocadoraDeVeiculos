import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { FuncionarioCreateViewModel } from 'src/app/shared/viewModels/funcionario/FuncionarioCreateViewModel';
import { FuncionarioEditViewModel } from 'src/app/shared/viewModels/funcionario/FuncionarioEditViewModel';
import { FuncionarioListViewModel } from 'src/app/shared/viewModels/funcionario/FuncionarioListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpFuncionarioService extends HttpApiBase<FuncionarioListViewModel,
                                                        FuncionarioListViewModel,
                                                        FuncionarioCreateViewModel,
                                                        FuncionarioEditViewModel> {

                                                          
  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/funcionario");
  }
}

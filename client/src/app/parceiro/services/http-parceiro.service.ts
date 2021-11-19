import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { ParceiroCreateViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroCreateViewModel';
import { ParceiroEditViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroEditViewModel';
import { ParceiroListViewModel } from 'src/app/shared/viewModels/parceiro/ParceiroListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpParceiroService extends HttpApiBase<ParceiroListViewModel, 
                                                      ParceiroListViewModel, 
                                                      ParceiroCreateViewModel, 
                                                      ParceiroEditViewModel> {

  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/parceiro");
  }
}

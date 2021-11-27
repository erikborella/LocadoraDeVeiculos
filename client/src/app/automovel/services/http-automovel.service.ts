import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { AutomovelCreateViewModel } from 'src/app/shared/viewModels/automovel/AutomovelCreateViewModel';
import { AutomovelDetailViewModel } from 'src/app/shared/viewModels/automovel/AutomovelDetailViewModel';
import { AutomovelListViewModel } from 'src/app/shared/viewModels/automovel/AutomovelListViewModel';
import { AutomovelEditViewModel } from 'src/app/shared/viewModels/automovel/AutomovelEditViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpAutomovelService extends HttpApiBase<AutomovelListViewModel,
                                                             AutomovelDetailViewModel,
                                                             AutomovelCreateViewModel,
                                                             AutomovelEditViewModel> {

constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/automovel");
  }
}

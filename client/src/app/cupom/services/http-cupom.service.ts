import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { CupomCreateViewModel } from 'src/app/shared/viewModels/cupom/CupomCreateViewModel';
import { CupomDetailViewModel } from 'src/app/shared/viewModels/cupom/CupomDetailViewModel';
import { CupomEditViewModel } from 'src/app/shared/viewModels/cupom/CupomEditViewModel';
import { CupomListViewModel } from 'src/app/shared/viewModels/cupom/CupomListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpCupomService extends HttpApiBase<CupomListViewModel,
                                                  CupomDetailViewModel,
                                                  CupomCreateViewModel,
                                                  CupomEditViewModel> {

  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/cupom");
  }
}

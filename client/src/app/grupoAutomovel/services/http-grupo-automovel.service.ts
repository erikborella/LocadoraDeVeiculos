import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiBase } from 'src/app/shared/httpApiBase';
import { GrupoAutomovelCreateViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelCreateViewModel';
import { GrupoAutomovelDetailViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelDetailViewModel';
import { GrupoAutomovelEditViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelEditViewModel';
import { GrupoAutomovelListViewModel } from 'src/app/shared/viewModels/grupoAutomovel/GrupoAutomovelListViewModel';

@Injectable({
  providedIn: 'root'
})
export class HttpGrupoAutomovelService extends HttpApiBase<GrupoAutomovelListViewModel,
                                                           GrupoAutomovelDetailViewModel,
                                                           GrupoAutomovelCreateViewModel,
                                                           GrupoAutomovelEditViewModel> {

  constructor(private http: HttpClient) { 
    super(http, "http://localhost:5000/api/grupoAutomovel");
  }
}

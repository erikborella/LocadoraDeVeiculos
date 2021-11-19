import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParceiroCriarComponent } from './parceiro/criar/parceiro-criar.component';
import { ParceiroEditarComponent } from './parceiro/editar/parceiro-editar.component';
import { ParceiroListarComponent } from './parceiro/listar/parceiro-listar.component';

const routes: Routes = [
  {path: 'parceiro/listar', component: ParceiroListarComponent},
  {path: 'parceiro/criar', component: ParceiroCriarComponent},
  {path: 'parceiro/editar/:id', component: ParceiroEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

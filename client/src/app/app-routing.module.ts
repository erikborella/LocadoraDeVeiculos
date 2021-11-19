import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupomCriarComponent } from './cupom/criar/cupom-criar.component';
import { CupomEditarComponent } from './cupom/editar/cupom-editar.component';
import { CupomListarComponent } from './cupom/listar/cupom-listar.component';
import { ParceiroCriarComponent } from './parceiro/criar/parceiro-criar.component';
import { ParceiroEditarComponent } from './parceiro/editar/parceiro-editar.component';
import { ParceiroListarComponent } from './parceiro/listar/parceiro-listar.component';

const routes: Routes = [
  {path: 'parceiro/listar', component: ParceiroListarComponent},
  {path: 'parceiro/criar', component: ParceiroCriarComponent},
  {path: 'parceiro/editar/:id', component: ParceiroEditarComponent},
  
  {path: 'cupom/listar', component: CupomListarComponent},
  {path: 'cupom/criar', component: CupomCriarComponent},
  {path: 'cupom/editar/:id', component: CupomEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

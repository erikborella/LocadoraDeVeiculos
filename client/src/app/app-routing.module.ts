import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupomCriarComponent } from './cupom/criar/cupom-criar.component';
import { CupomEditarComponent } from './cupom/editar/cupom-editar.component';
import { CupomListarComponent } from './cupom/listar/cupom-listar.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioEditarComponent } from './funcionario/editar/funcionario-editar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { ParceiroCriarComponent } from './parceiro/criar/parceiro-criar.component';
import { ParceiroEditarComponent } from './parceiro/editar/parceiro-editar.component';
import { ParceiroListarComponent } from './parceiro/listar/parceiro-listar.component';
import { PessoaJuridicaCriarComponent } from './pessoaJuridica/criar/pessoa-juridica-criar.component';
import { PessoaJuridicaEditarComponent } from './pessoaJuridica/editar/pessoa-juridica-editar.component';
import { PessoaJuridicaListarComponent } from './pessoaJuridica/listar/pessoa-juridica-listar.component';

const routes: Routes = [
  {path: 'parceiro/listar', component: ParceiroListarComponent},
  {path: 'parceiro/criar', component: ParceiroCriarComponent},
  {path: 'parceiro/editar/:id', component: ParceiroEditarComponent},
  
  {path: 'cupom/listar', component: CupomListarComponent},
  {path: 'cupom/criar', component: CupomCriarComponent},
  {path: 'cupom/editar/:id', component: CupomEditarComponent},
  
  {path: 'funcionario/listar', component: FuncionarioListarComponent},
  {path: 'funcionario/criar', component: FuncionarioCriarComponent},
  {path: 'funcionario/editar/:id', component: FuncionarioEditarComponent},

  {path: 'pessoaJuridica/listar', component: PessoaJuridicaListarComponent},
  {path: 'pessoaJuridica/criar', component: PessoaJuridicaCriarComponent},
  {path: 'pessoaJuridica/editar/:id', component: PessoaJuridicaEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

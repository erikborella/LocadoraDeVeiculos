import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomovelCriarComponent } from './automovel/criar/automovel-criar.component';
import { AutomovelEditarComponent } from './automovel/editar/automovel-editar.component';
import { AutomovelListarComponent } from './automovel/listar/automovel-listar.component';
import { CupomCriarComponent } from './cupom/criar/cupom-criar.component';
import { CupomEditarComponent } from './cupom/editar/cupom-editar.component';
import { CupomListarComponent } from './cupom/listar/cupom-listar.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioEditarComponent } from './funcionario/editar/funcionario-editar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { GrupoAutomovelCriarComponent } from './grupoAutomovel/criar/grupo-automovel-criar.component';
import { GrupoAutomovelEditarComponent } from './grupoAutomovel/editar/grupo-automovel-editar.component';
import { GrupoAutomovelListarComponent } from './grupoAutomovel/listar/grupo-automovel-listar.component';
import { ParceiroCriarComponent } from './parceiro/criar/parceiro-criar.component';
import { ParceiroEditarComponent } from './parceiro/editar/parceiro-editar.component';
import { ParceiroListarComponent } from './parceiro/listar/parceiro-listar.component';
import { PessoaFisicaCriarComponent } from './pessoaFisica/criar/pessoa-fisica-criar.component';
import { PessoaFisicaEditarComponent } from './pessoaFisica/editar/pessoa-fisica-editar.component';
import { PessoaFisicaListarComponent } from './pessoaFisica/listar/pessoa-fisica-listar.component';
import { PessoaJuridicaCriarComponent } from './pessoaJuridica/criar/pessoa-juridica-criar.component';
import { PessoaJuridicaEditarComponent } from './pessoaJuridica/editar/pessoa-juridica-editar.component';
import { PessoaJuridicaListarComponent } from './pessoaJuridica/listar/pessoa-juridica-listar.component';
import { TaxaEServicoCriarComponent } from './taxaEServico/criar/taxa-e-servico-criar.component';
import { TaxaEServicoEditarComponent } from './taxaEServico/editar/taxa-e-servico-editar.component';
import { TaxaEServicoListarComponent } from './taxaEServico/listar/taxa-e-servico-listar.component';

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

  {path: 'pessoaFisica/listar', component: PessoaFisicaListarComponent},
  {path: 'pessoaFisica/criar', component: PessoaFisicaCriarComponent},
  {path: 'pessoaFisica/editar/:id', component: PessoaFisicaEditarComponent},

  {path: 'taxaEServico/listar', component: TaxaEServicoListarComponent},
  {path: 'taxaEServico/criar', component: TaxaEServicoCriarComponent},
  {path: 'taxaEServico/editar/:id', component: TaxaEServicoEditarComponent},
  
  {path: 'grupoAutomovel/listar', component: GrupoAutomovelListarComponent},
  {path: 'grupoAutomovel/criar', component: GrupoAutomovelCriarComponent},
  {path: 'grupoAutomovel/editar/:id', component: GrupoAutomovelEditarComponent},
  
  {path: 'automovel/listar', component: AutomovelListarComponent},
  {path: 'automovel/criar', component: AutomovelCriarComponent},
  {path: 'automovel/editar/:id', component: AutomovelEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

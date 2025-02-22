import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';


import { HeaderComponent } from './navegacao/header/header.component';
import { BaseComponent } from './navegacao/base/base.component';
import { ParceiroListarComponent } from './parceiro/listar/parceiro-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ParceiroCriarComponent } from './parceiro/criar/parceiro-criar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { ParceiroEditarComponent } from './parceiro/editar/parceiro-editar.component';
import { CupomListarComponent } from './cupom/listar/cupom-listar.component';
import { DialogExcluirComponent } from './shared/dialog-excluir/dialog-excluir.component';
import { CupomCriarComponent } from './cupom/criar/cupom-criar.component';
import { CupomEditarComponent } from './cupom/editar/cupom-editar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioEditarComponent } from './funcionario/editar/funcionario-editar.component';
import { PessoaJuridicaListarComponent } from './pessoaJuridica/listar/pessoa-juridica-listar.component';
import { PessoaJuridicaCriarComponent } from './pessoaJuridica/criar/pessoa-juridica-criar.component';
import { PessoaJuridicaEditarComponent } from './pessoaJuridica/editar/pessoa-juridica-editar.component';
import { PessoaFisicaListarComponent } from './pessoaFisica/listar/pessoa-fisica-listar.component';
import { PessoaFisicaCriarComponent } from './pessoaFisica/criar/pessoa-fisica-criar.component';

import ptBr from "@angular/common/locales/pt"
import { registerLocaleData } from "@angular/common";
import { PessoaFisicaEditarComponent } from './pessoaFisica/editar/pessoa-fisica-editar.component';
import { TaxaEServicoListarComponent } from './taxaEServico/listar/taxa-e-servico-listar.component';
import { PegarTipoTaxaPipe } from './taxaEServico/pipes/pegar-tipo.pipe';
import { TaxaEServicoCriarComponent } from './taxaEServico/criar/taxa-e-servico-criar.component';
import { TaxaEServicoEditarComponent } from './taxaEServico/editar/taxa-e-servico-editar.component';
import { GrupoAutomovelListarComponent } from './grupoAutomovel/listar/grupo-automovel-listar.component';
import { GrupoAutomovelCriarComponent } from './grupoAutomovel/criar/grupo-automovel-criar.component';
import { GrupoAutomovelEditarComponent } from './grupoAutomovel/editar/grupo-automovel-editar.component';
import { AutomovelListarComponent } from './automovel/listar/automovel-listar.component';
import { AutomovelCriarComponent } from './automovel/criar/automovel-criar.component';
import { AutomovelEditarComponent } from './automovel/editar/automovel-editar.component'

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    ParceiroListarComponent,
    ParceiroCriarComponent,
    ParceiroEditarComponent,
    CupomListarComponent,
    DialogExcluirComponent,
    CupomCriarComponent,
    CupomEditarComponent,
    FuncionarioListarComponent,
    FuncionarioCriarComponent,
    FuncionarioEditarComponent,
    PessoaJuridicaListarComponent,
    PessoaJuridicaCriarComponent,
    PessoaJuridicaEditarComponent,
    PessoaFisicaListarComponent,
    PessoaFisicaCriarComponent,
    PessoaFisicaEditarComponent,
    TaxaEServicoListarComponent,
    PegarTipoTaxaPipe,
    TaxaEServicoCriarComponent,
    TaxaEServicoEditarComponent,
    GrupoAutomovelListarComponent,
    GrupoAutomovelCriarComponent,
    GrupoAutomovelEditarComponent,
    AutomovelListarComponent,
    AutomovelCriarComponent,
    AutomovelEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatCommonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
    RouterModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

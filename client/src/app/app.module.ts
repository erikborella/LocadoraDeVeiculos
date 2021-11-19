import { NgModule } from '@angular/core';
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
import { MatCommonModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';


import { HeaderComponent } from './navegacao/header/header.component';
import { BaseComponent } from './navegacao/base/base.component';
import { ParceiroListarComponent } from './parceiro/listar/parceiro-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ParceiroCriarComponent } from './parceiro/criar/parceiro-criar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { ParceiroEditarComponent } from './parceiro/editar/parceiro-editar.component';
import { ParceiroExcluirComponent } from './parceiro/excluir/parceiro-excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    ParceiroListarComponent,
    ParceiroCriarComponent,
    ParceiroEditarComponent,
    ParceiroExcluirComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

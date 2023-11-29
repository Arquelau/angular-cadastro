import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { ContatoComponent } from './contato/contato.component';
import { DocumentacaoComponent } from './documentacao/documentacao.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';
import { EmpregoEducacaoComponent } from './emprego-educacao/emprego-educacao.component';
import { InformacoesDeResidenciaComponent } from './informacoes-de-residencia/informacoes-de-residencia.component';
import { InformacoesPessoaisComponent } from './informacoes-pessoais/informacoes-pessoais.component';
import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent,
    ContatoComponent,
    DocumentacaoComponent,
    EmergenciaComponent,
    EmpregoEducacaoComponent,
    InformacoesDeResidenciaComponent,
    InformacoesPessoaisComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }

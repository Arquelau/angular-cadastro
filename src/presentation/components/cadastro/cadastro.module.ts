import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato/contato.component';
import { DocumentacaoComponent } from './documentacao/documentacao.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';
import { EmpregoEducacaoComponent } from './emprego-educacao/emprego-educacao.component';
import { InformacoesDeResidenciaComponent } from './informacoes-de-residencia/informacoes-de-residencia.component';
import { InformacoesPessoaisComponent } from './informacoes-pessoais/informacoes-pessoais.component';
import { CadastroComponent } from './cadastro.component';


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
    CommonModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }

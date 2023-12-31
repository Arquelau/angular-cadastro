import { Component, Input, SimpleChanges } from '@angular/core'
import { FormControl } from '@angular/forms'
import { InformacoesPessoais } from '../../../../domain/cadastro/informacoes-pessoais'
import { MAT_DATE_FORMATS } from '@angular/material/core'

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
}

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrl: './informacoes-pessoais.component.css',
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
]
})
export class InformacoesPessoaisComponent {
  
  @Input() buttonTrigger: any
  buttonToggle: boolean = false
  refresh: number

  nome: FormControl
  dataDeNascimento: FormControl
  genero: FormControl
  estadoCivil: FormControl
  nacionalidade: FormControl

  localStorageName: string

  constructor(){
    this.nome = new FormControl()
    this.dataDeNascimento = new FormControl()
    this.genero = new FormControl()
    this.estadoCivil = new FormControl()
    this.nacionalidade = new FormControl()
    this.buttonToggle = false
    this.localStorageName = 'informacoesPessoais'
    this.refresh = 0
  }

  ngOnInit() {
    const localData = localStorage.getItem(this.localStorageName)
    let jsonLocalData
    if(localData != null){
      jsonLocalData = JSON.parse(localData)
    }
    if (localData?.length){
      this.nome.setValue(jsonLocalData.nome)
      this.dataDeNascimento.setValue(jsonLocalData.dataDeNascimento)
      this.genero.setValue(jsonLocalData.genero)
      this.estadoCivil.setValue(jsonLocalData.estadoCivil)
      this.nacionalidade.setValue(jsonLocalData.nacionalidade)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonTrigger'] && changes['buttonTrigger']?.previousValue != changes['buttonTrigger']?.currentValue && this.refresh >= 1) {
      this.buttonToggle= !this.buttonToggle

      let data: InformacoesPessoais = {
      nome: this.nome.getRawValue(),
      dataDeNascimento: this.dataDeNascimento.getRawValue(),
      genero: this.genero.getRawValue(),
      estadoCivil: this.estadoCivil.getRawValue(),
      nacionalidade: this.nacionalidade.getRawValue()
      }

      localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }
    this.refresh++
  }
}

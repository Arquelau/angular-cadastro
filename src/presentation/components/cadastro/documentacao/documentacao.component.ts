import { Component, Input, SimpleChanges } from '@angular/core'
import { FormControl } from '@angular/forms'
import { CpfPipe } from './cpf.pipe'
import { Documentacao } from '../../../../domain/cadastro/documentacao'

@Component({
  selector: 'app-documentacao',
  templateUrl: './documentacao.component.html',
  styleUrl: './documentacao.component.css'
})
export class DocumentacaoComponent {
  @Input() buttonTrigger: boolean | undefined
  buttonToggle: boolean = false
  rg: FormControl
  passaporte: FormControl
  cnh: FormControl
  cpf: FormControl
  cpfPipe: CpfPipe

  refresh: number
  localStorageName: string

  constructor(){
    this.cpf = new FormControl()
    this.cpfPipe = new CpfPipe()
    this.rg = new FormControl()
    this.passaporte = new FormControl()
    this.cnh = new FormControl()
    this.refresh = 0
    this.localStorageName = 'documentacao'
    this.buttonToggle = false
  }

  transformCpf(value: string){
    this.cpf.setValue(this.cpfPipe.transform(value))
  }

  ngOnInit() {
    const localData = localStorage.getItem(this.localStorageName)
    let jsonLocalData
    if(localData != null){
      jsonLocalData = JSON.parse(localData)
    }
    if (localData?.length){
      this.rg.setValue(jsonLocalData.rg)
      this.cpf.setValue(jsonLocalData.cpf)
      this.passaporte.setValue(jsonLocalData.passaporte)
      this.cnh.setValue(jsonLocalData.cnh)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonTrigger'] && changes['buttonTrigger']?.previousValue != changes['buttonTrigger']?.currentValue && this.refresh >= 1) {
      this.buttonToggle= !this.buttonToggle

      let data: Documentacao = {
        rg: this.rg.getRawValue(),
        cpf: this.cpf.getRawValue(),
        passaporte: this.passaporte.getRawValue(),
        cnh: this.cnh.getRawValue()
      }

      localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }
    this.refresh++
  }
}

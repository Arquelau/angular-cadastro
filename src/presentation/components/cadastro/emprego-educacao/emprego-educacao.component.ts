import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-emprego-educacao',
  templateUrl: './emprego-educacao.component.html',
  styleUrl: './emprego-educacao.component.css'
})
export class EmpregoEducacaoComponent {
  @Input() buttonTrigger: any
  buttonToggle: boolean = false
  refresh: number

  renda: FormControl
  historicoDeCredito: FormControl
  contaBancaria: FormControl

  localStorageName: string

  constructor(){
    this.renda = new FormControl()
    this.historicoDeCredito = new FormControl()
    this.contaBancaria = new FormControl()
    this.buttonToggle = false
    this.localStorageName = 'empregoEducacao'
    this.refresh = 0
  }

  ngOnInit() {
    const localData = localStorage.getItem(this.localStorageName)
    let jsonLocalData
    if(localData != null){
      jsonLocalData = JSON.parse(localData)
    }
    if (localData?.length){
      this.renda.setValue(jsonLocalData.renda)
      this.historicoDeCredito.setValue(jsonLocalData.historicoDeCredito)
      this.contaBancaria.setValue(jsonLocalData.contaBancaria)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonTrigger'] && changes['buttonTrigger']?.previousValue != changes['buttonTrigger']?.currentValue && this.refresh >= 1) {
      this.buttonToggle= !this.buttonToggle

      let data = {
      renda: this.renda.getRawValue(),
      historicoDeCredito: this.historicoDeCredito.getRawValue(),
      contaBancaria: this.contaBancaria.getRawValue()
      }

      localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }
    this.refresh++
  }
}

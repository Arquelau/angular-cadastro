import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrl: './emergencia.component.css'
})
export class EmergenciaComponent {
  @Input() buttonTrigger: boolean | undefined
  buttonToggle: boolean = false
  contatoDeEmergencia: FormControl
  informacoesMedicasRelevantes: FormControl
  refresh: number
  localStorageName: string

  constructor(){
    this.buttonToggle = false
    this.contatoDeEmergencia = new FormControl()
    this.informacoesMedicasRelevantes = new FormControl()
    this.refresh = 0
    this.localStorageName = 'emergencia'
  }

  ngOnInit() {
    const localData = localStorage.getItem(this.localStorageName)
    let jsonLocalData
    if(localData != null){
      jsonLocalData = JSON.parse(localData)
    }
    if (localData?.length){
      this.contatoDeEmergencia.setValue(jsonLocalData.contatoDeEmergencia)
      this.informacoesMedicasRelevantes.setValue(jsonLocalData.informacoesMedicasRelevantes)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonTrigger'] && changes['buttonTrigger']?.previousValue != changes['buttonTrigger']?.currentValue && this.refresh >= 1) {
      this.buttonToggle= !this.buttonToggle

      let data = {
      contatoDeEmergencia: this.contatoDeEmergencia.getRawValue(),
      informacoesMedicasRelevantes: this.informacoesMedicasRelevantes.getRawValue()
      }

      localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }
    this.refresh++
  }
}

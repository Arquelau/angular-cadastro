import { Component, Input, SimpleChanges } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() buttonTrigger: boolean | undefined
  buttonToggle: boolean = false
  endereco: FormControl
  numeroDeTelefone: FormControl
  email: FormControl
  refresh: number
  localStorageName: string

  constructor(){
    this.buttonToggle = false
    this.endereco = new FormControl()
    this.numeroDeTelefone = new FormControl()
    this.email = new FormControl()
    this.refresh = 0
    this.localStorageName = 'contato'
  }

  ngOnInit() {
    const localData = localStorage.getItem(this.localStorageName)
    let jsonLocalData
    if(localData != null){
      jsonLocalData = JSON.parse(localData)
    }
    if (localData?.length){
      this.endereco.setValue(jsonLocalData.endereco)
      this.numeroDeTelefone.setValue(jsonLocalData.numeroDeTelefone)
      this.email.setValue(jsonLocalData.email)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonTrigger'] && changes['buttonTrigger']?.previousValue != changes['buttonTrigger']?.currentValue && this.refresh >= 1) {
      this.buttonToggle= !this.buttonToggle

      let data = {
        endereco: this.endereco.getRawValue(),
        numeroDeTelefone: this.numeroDeTelefone.getRawValue(),
        email: this.email.getRawValue(),
      }

      localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }
    this.refresh++
  }
}


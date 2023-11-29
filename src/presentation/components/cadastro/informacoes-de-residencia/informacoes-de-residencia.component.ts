import { Component, Input, SimpleChanges } from '@angular/core'
import { CepService } from '../../../../app/cep.service'
import { InformacoesDeResidencia } from '../../../../domain/cadastro/informacoes-de-residencia'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-informacoes-de-residencia',
  templateUrl: './informacoes-de-residencia.component.html',
  styleUrl: './informacoes-de-residencia.component.css'
})
export class InformacoesDeResidenciaComponent {

  @Input() buttonTrigger: any
  buttonToggle: boolean

  cep: FormControl
  logradouro: FormControl
  bairro: FormControl
  cidade: FormControl
  estado: FormControl
  localStorageName: string
  refresh: number

  constructor(private cepService: CepService) {
    this.cep = new FormControl()
    this.logradouro = new FormControl()
    this.bairro = new FormControl()
    this.cidade = new FormControl()
    this.estado = new FormControl()
    this.buttonToggle = false
    this.localStorageName = 'informacoesDeResidencia'
    this.refresh = 0
  }

  getCep(value: string) {
    this.cepService.search(value).subscribe((data: any) => this.fillForm(data))
  }

  fillForm(data: InformacoesDeResidencia) {
    this.cep.setValue(data.cep)
    this.logradouro.setValue(data.logradouro)
    this.cidade.setValue(data.localidade)
    this.bairro.setValue(data.bairro)
    this.estado.setValue(data.uf)
  }

  applyFilter(event: Event): string {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

  ngOnInit() {
    const localData = localStorage.getItem(this.localStorageName)
    let jsonLocalData
    if(localData != null){
      jsonLocalData = JSON.parse(localData)
    }
    if (localData?.length){
      this.cep.setValue(jsonLocalData.cep)
      this.logradouro.setValue(jsonLocalData.logradouro)
      this.cidade.setValue(jsonLocalData.cidade)
      this.bairro.setValue(jsonLocalData.bairro)
      this.estado.setValue(jsonLocalData.estado)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonTrigger'] && changes['buttonTrigger']?.previousValue != changes['buttonTrigger']?.currentValue && this.refresh >= 1) {
      this.buttonToggle= !this.buttonToggle

      let data = {
      cep: this.cep.getRawValue(),
      logradouro: this.logradouro.getRawValue(),
      cidade: this.cidade.getRawValue(),
      bairro: this.bairro.getRawValue(),
      estado: this.estado.getRawValue()
      }

      localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }
    this.refresh++
  }
}

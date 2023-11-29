import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  buttonToggle: boolean

  constructor(){
    this.buttonToggle = false
  }

  cadastroSaveClick(): void {
    this.buttonToggle = !this.buttonToggle
    alert("Os Dados foram salvos localmente!")
  }
}

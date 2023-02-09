import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Patrícia";
  dataNascimento = "1983-07-20";
  urlImagem = "/assets/patricia.png"

  mostrarDataNascimento() {
    alert(`A data de nascimento da Patrícia é:${this.dataNascimento}`)

  }

}

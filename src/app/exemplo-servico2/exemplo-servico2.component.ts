import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  descricao = "";

  constructor(public logger: LoggerService ) {

  }

  adicionarProduto() {
    this.logger.logar(`O produto com o nome ${this.descricao} foi adicionado`);
}
}

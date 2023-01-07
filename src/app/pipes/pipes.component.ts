import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
interface Resp {
  segundos: number;
  minutos: number;
  horas: number;
  dias: number;
  semanas: number;
}
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  frase: string = '';
  valor: string = 'GBP';
  //
  //tiempoPasado: Date = new Date('2022/12/29 09:42:57');
  tiempoPasado: string = new Date().toISOString();
  resp: Resp = {
    segundos: 0,
    minutos: 0,
    horas: 0,
    dias: 0,
    semanas: 0,
  };
  resta: number = 0;
  calcular() {
    this.resta = new Date().getTime() - new Date(this.tiempoPasado).getTime();
    this.resp.segundos = Math.round(this.resta / 1000);
    this.resp.minutos = Math.floor(this.resp.segundos / 60);
    this.resp.horas = Math.floor(this.resp.minutos / 60);
    this.resp.dias = Math.floor(this.resp.horas / 24);
    this.resp.semanas = Math.floor(this.resp.dias / 7);
  }
}

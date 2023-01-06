import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  frase: string = '';
  valor: string = 'GBP';

  tiempo = new Date('Jan 6, 2023, 6:33:51 PM');

  tiempo2 = this.tiempo.toLocaleString();

  after = new Date();
  after2 = this.after.toLocaleString();
}

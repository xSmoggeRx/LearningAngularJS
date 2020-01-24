import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumatorio',
  templateUrl: './sumatorio.component.html',
  styleUrls: ['./sumatorio.component.css']
})
export class SumatorioComponent implements OnInit {
  private valorActual: number;
  constructor() {
    this.valorActual = 0;
  }

  ngOnInit() {
  }

  sumarValor() {
    this.valorActual++;
  }

  restarValor() {
    this.valorActual--;
  }

  pruebaFetch() {
    const url = 'http://localhost:4000/hey';
    fetch(url, { method: 'POST' })
    .then((response) => {
      console.log('response ->', response);
      return response.json();
    })
    .then((myJson) => {
      console.log('MyJson ->', myJson);
    })
    .catch((error) => console.log('catch', error));
  }

  getUn4() {
    return 4;
  }

}

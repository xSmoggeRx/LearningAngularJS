import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonpapelera',
  templateUrl: './botonpapelera.component.html',
  styleUrls: ['./botonpapelera.component.css']
})

export class BotonPapeleraComponent implements OnInit {

  private testNumber: number;
  constructor() {
    this.testNumber = 5;
    console.log(this.testNumber);
  }

  ngOnInit() {
    this.testNumber++;
    console.log(this.testNumber + ' onInit!');
  }

}

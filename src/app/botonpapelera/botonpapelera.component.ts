import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioHttpService } from '../servicio-http.service';


@Component({
  selector: 'app-botonpapelera',
  templateUrl: './botonpapelera.component.html',
  styleUrls: ['./botonpapelera.component.css']
})

export class BotonPapeleraComponent implements OnInit {

  private testNumber: number;
  constructor(private router: Router, private server: ServicioHttpService) {
    this.testNumber = 5;
    console.log(this.testNumber);
  }

  ngOnInit() {
    this.testNumber++;
    console.log(this.testNumber + ' onInit!');
  }

  navegarNotas() {
    // this.router.navigateByUrl('/notas');
    this.server.pruebaFetch();
  }

}

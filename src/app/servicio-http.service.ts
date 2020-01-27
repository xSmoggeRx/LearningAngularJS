import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  constructor(private http: HttpClient) { }

  getSeeschweiler(){
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
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
}

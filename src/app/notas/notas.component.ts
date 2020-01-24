import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notes: string[];
  note: string;

  constructor() {
    this.notes = [];
  }

  ngOnInit() {
  }

  createNote(){
    this.notes.push(this.note);
  }
}

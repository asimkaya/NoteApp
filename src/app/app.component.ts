import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  note: string;
  randomnumber: number;
  noteArray = [];

  ngOnInit() { }

  GenerateNote() {
    this.note = prompt();
    this.randomnumber = Math.random() * 9;
    localStorage.setItem(String(this.randomnumber), this.note)
    this.noteArray.push(String(this.randomnumber));
  }

  ListNote() { }
}

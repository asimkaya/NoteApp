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
  randomNumberArray = [];
  i: number = 0;
  key: any;

  ngOnInit() {
    this.ListNote();
  }

  GenerateNote() {
    this.note = prompt();
    this.noteArray.push(this.note);


  }

  ListNote() {
    for (let index = 0; index < this.randomNumberArray.length; index++) {
      const element = this.randomNumberArray[index];
      this.noteArray.push(localStorage.getItem(element))
    }
  }
}

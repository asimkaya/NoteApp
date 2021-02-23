import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

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

  ngOnInit() {
    this.ListNote();
  }

  constructor(private api: ApiService) { }

  GenerateNote() {
    this.note = prompt();
    this.api.createNote(this.note).subscribe(data => {
      this.ListNote();
    });

  }

  ListNote() {
    this.api.getNotes().subscribe((data: any) => {
      this.noteArray = data;
    })
  }

  DeleteNote(e: any) {
    confirm('Silmek istediğinize emin misiniz ?') == true ?
      this.api.deleteNote(e).subscribe(data => {
        this.ListNote();
      })
      : console.log(false)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get('http://localhost:3000/' + 'notes', {
      observe: 'body'
    })
  }

  createNote(note: string): Observable<any> {
    return this.http.post('http://localhost:3000/' + 'notes', {
      note
    }, { observe: 'body' })
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/notes/' + id, {
      observe: 'body'
    })
  }
}

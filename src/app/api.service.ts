import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get('https://json-server-wamoj59665220032.codeanyapp.com/' + 'notes', {
      observe: 'body'
    })
  }

  createNote(note: string): Observable<any> {
    return this.http.post('https://json-server-wamoj59665220032.codeanyapp.com/' + 'notes', {
      note
    }, { observe: 'body' })
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete('https://json-server-wamoj59665220032.codeanyapp.com/notes/' + id, {
      observe: 'body'
    })
  }
}

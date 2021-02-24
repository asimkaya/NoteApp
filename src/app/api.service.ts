import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get(environment.apiUrl + 'notes', {
      observe: 'body'
    })
  }

  createNote(note: string): Observable<any> {
    return this.http.post(environment.apiUrl + 'notes', {
      note
    }, { observe: 'body' })
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + id, {
      observe: 'body'
    })
  }
}

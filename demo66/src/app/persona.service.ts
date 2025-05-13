import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:8080/jakarta-postgres-app/api/personas'; 

  constructor(private http: HttpClient) {}

  listarPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarPersona(persona: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, persona, { headers });
  }
}

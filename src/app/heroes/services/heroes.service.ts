import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.apiURL;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.apiUrl }/heroes`);
  }

  getHeroeById( id: string ): Observable<Heroe> {
    return this.http.get<Heroe>(`${ this.apiUrl }/heroes/${id}`);
  }

  getSuggestion( termino: string ):  Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.apiUrl }/heroes?q=${ termino }&_limit=6`);
  }

  addHeroe( heroe:Heroe ): Observable<Heroe> {
    return this.http.post<Heroe>(`${ this.apiUrl }/heroes`, heroe );
  }

  updateHeroe( heroe:Heroe ): Observable<Heroe> {
    return this.http.put<Heroe>(`${ this.apiUrl }/heroes/${ heroe.id }`, heroe );
  }

  deleteHeroe( id:string ): Observable<any> {
    return this.http.delete<any>(`${ this.apiUrl }/heroes/${ id }`);
  }

}

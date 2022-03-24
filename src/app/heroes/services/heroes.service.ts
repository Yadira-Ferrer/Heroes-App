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
}

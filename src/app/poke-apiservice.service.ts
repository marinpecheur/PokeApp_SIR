import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetail, PokeServiceRes } from './pokemon';


@Injectable({
  providedIn: 'root'
})


export class PokeAPIServiceService {
url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { 

  }

  getPokemons() : Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>(this.url);
  }

  getPokemonsInfo(id:string) : Observable<PokeDetail>{
    return this.http.get<PokeDetail>(this.url+id+'/');
  }

}

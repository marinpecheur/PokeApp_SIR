import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeImageService {

  url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http: HttpClient) { 

  }

  getImage(id:string) {
    return (this.url + id + '.png')
  }

}

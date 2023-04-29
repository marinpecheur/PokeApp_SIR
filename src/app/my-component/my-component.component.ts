import { Component } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeImageService } from '../poke-image.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers:[PokeAPIServiceService]
})
export class MyComponentComponent {
  id: string = '';
  pokes : Pokemon[] = [];
  selectedPokeId!: string;
  searchPokeName = '';
  pokeDetail!: PokeDetail ;
  urlImage : any ;

    constructor(private pokeService : PokeAPIServiceService ,
       private pokeShareInfoService : PokeShareInfoService, private pokeImageService : PokeImageService
      ){

    }

    ngOnInit():void{
      this.pokeService.getPokemons().subscribe((data) => {
        data.results.forEach((e,index) => {
          index = index +1;
          this.pokes.push(new Pokemon(''+index,e.name,e.url))
        })
      });
    }

    go(){
      if(this.selectedPokeId != ''){
        this.pokeService.getPokemonsInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
        this.pokeShareInfoService.setValue(this.selectedPokeId);
        this.urlImage = this.pokeImageService.getImage(this.selectedPokeId);
      };
    }
}

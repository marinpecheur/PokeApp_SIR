import { Component, Input } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail } from '../pokemon';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers:[]
})



export class PokedetailComponent {
   @Input('detail')
   detail!: PokeDetail;


  constructor( private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(el => console.log('element : ' + el));
  }
}



import { Component, Input } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail } from '../pokemon';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers:[]
})

<<<<<<< HEAD


export class PokedetailComponent {
   @Input('detail')
   detail!: PokeDetail;
=======
export class PokedetailComponent {
  @Input('detail')
  detail!: PokeDetail;
  selectedPokeId: any;
>>>>>>> af8df1d790593adb3bbd4a589b9c06a1cb9f6f41


  constructor( private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(el => console.log('element : ' + el));
  }
}



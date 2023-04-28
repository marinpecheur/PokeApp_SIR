import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe'; //Ajouter

import { HttpClientModule } from '@angular/common/http';
import { PokedetailComponent } from './pokedetail/pokedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
  ],
  imports: [
    FormsModule, //Ajouter
    BrowserModule,
    HttpClientModule //New service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

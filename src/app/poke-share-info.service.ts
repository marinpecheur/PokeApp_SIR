import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

public stringVar = new Subject<string>();

  getObservable(): Subject<string>{
    return this.stringVar;
  }

  constructor() { }


  public setValue(val : string){
    this.stringVar.next(val);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Celular } from './celulares-list/Celular';
import { CelularesListComponent } from './celulares-list/celulares-list.component';

@Injectable({
  providedIn: 'root'
})


export class CarritoCelularesService {

  private _shopList : Celular[] = [];
  shopList : BehaviorSubject <Celular[]> = new BehaviorSubject(this._shopList);
  constructor() { }

  addToCart(celular: Celular) {
    
    
    let item = this._shopList.find((v1)=>v1.nombre == celular.nombre); 
    if(!item){
      this._shopList.push(celular);

    }
    else{
      item.cantidad += celular.cantidad;

    }
    
      console.log(this._shopList);

  }

 
}

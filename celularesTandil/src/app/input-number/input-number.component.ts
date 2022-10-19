import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { Celular } from '../celulares-list/Celular';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  
  constructor() { }
  @Input()
  cantidad!: number;
  @Input()
  max !:number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  // @Output()
  // maxReached: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upCantidad () : void {
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    // else
    // this.maxReached.emit(this.max) ;
  }
  downCantidad () : void { 
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  ChangeQuantity(event:KeyboardEvent ):void{
    console.log(event.target);
    this.cantidadChange.emit(this.cantidad);

  }

}

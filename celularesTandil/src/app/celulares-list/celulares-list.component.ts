import { Component, OnInit } from '@angular/core';
import { Celular } from './Celular';

@Component({
  selector: 'app-celulares-list',
  templateUrl: './celulares-list.component.html',
  styleUrls: ['./celulares-list.component.css']
})
export class CelularesListComponent implements OnInit {

  celulares:  Celular [] = [
    {
        marca : "samsung",
        tipo : "gama alta" , 
        nombre : "samsung s21" , 
        precio : 150.000 , 
        stock : 13 ,
        imagen : "./assets/img/samsungs21.jpg" ,
        clearance : false,
        cantidad : 0 ,
    } ,
    {
        marca : "iphone",
        tipo : "gama alta" , 
        nombre : "iphone 14 pro max" , 
        precio : 500.000 , 
        stock : 0 ,
        imagen : "./assets/img/samsungs21.jpg" ,
        clearance : true,
        cantidad : 0 ,
    }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

  upCantidad (celulares :Celular) : void {
      if(celulares.cantidad < celulares.stock)
        celulares.cantidad++;
  }
  downCantidad (celulares :Celular) : void { 
    if(celulares.cantidad > 0)
      celulares.cantidad--;
  }
  ChangeQuantity(event: any , celulares: Celular ){
    

  }
  
}

import { Component, OnInit } from '@angular/core';
import { CarritoCelularesService } from '../carrito-celulares.service';
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
  
  constructor(private carrito: CarritoCelularesService) {
    
   }

  ngOnInit(): void {
  }

  addToCart(celular:Celular):void{

    this.carrito.addToCart(celular);
    celular.stock -= celular.cantidad;
    celular.cantidad = 0;
  }
 maxReached(m:number){


 }
  
}

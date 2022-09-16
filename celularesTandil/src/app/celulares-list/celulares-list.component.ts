import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celulares-list',
  templateUrl: './celulares-list.component.html',
  styleUrls: ['./celulares-list.component.css']
})
export class CelularesListComponent implements OnInit {

  celular = {
    "marca" : "samsung",
    "tipo" : "gama alta" , 
    "nombre" : "samsung s21" , 
    "precio" : "150.000" , 
    "stock" : "disponible" ,
    "imagen" : "./assets/img/samsungs21.jpg" ,
 
  }
  constructor() { }

  ngOnInit(): void {
  }

}

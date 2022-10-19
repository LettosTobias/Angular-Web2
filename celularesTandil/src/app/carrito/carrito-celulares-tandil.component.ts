import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoCelularesService } from '../carrito-celulares.service';
import { Celular } from '../celulares-list/Celular';

@Component({
  selector: 'app-carrito-celulares-tandil',
  templateUrl: './carrito-celulares-tandil.component.html',
  styleUrls: ['./carrito-celulares-tandil.component.css']
})
export class CarritoCelularesTandilComponent implements OnInit {

  shopList$!: Observable<Celular[]>;

  constructor(private carrito: CarritoCelularesService) {

    this.shopList$ = carrito.shopList.asObservable();

   }

  ngOnInit(): void {
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCelularesTandilComponent } from './carrito-celulares-tandil.component';

describe('CarritoCelularesTandilComponent', () => {
  let component: CarritoCelularesTandilComponent;
  let fixture: ComponentFixture<CarritoCelularesTandilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoCelularesTandilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoCelularesTandilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CarritoCelularesService } from './carrito-celulares.service';

describe('CarritoCelularesService', () => {
  let service: CarritoCelularesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoCelularesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

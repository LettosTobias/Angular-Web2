import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesTandilCelularesComponent } from './celulares-tandil-celulares.component';

describe('CelularesTandilCelularesComponent', () => {
  let component: CelularesTandilCelularesComponent;
  let fixture: ComponentFixture<CelularesTandilCelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularesTandilCelularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelularesTandilCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

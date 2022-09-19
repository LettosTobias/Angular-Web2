import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesTandilAboutComponent } from './celulares-tandil-about.component';

describe('CelularesTandilAboutComponent', () => {
  let component: CelularesTandilAboutComponent;
  let fixture: ComponentFixture<CelularesTandilAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularesTandilAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelularesTandilAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

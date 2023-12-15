import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasCargarComponent } from './carreras-cargar.component';

describe('CarrerasCargarComponent', () => {
  let component: CarrerasCargarComponent;
  let fixture: ComponentFixture<CarrerasCargarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrerasCargarComponent]
    });
    fixture = TestBed.createComponent(CarrerasCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

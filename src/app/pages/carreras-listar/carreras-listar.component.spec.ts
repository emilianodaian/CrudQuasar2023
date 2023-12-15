import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasListarComponent } from './carreras-listar.component';

describe('CarrerasListarComponent', () => {
  let component: CarrerasListarComponent;
  let fixture: ComponentFixture<CarrerasListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrerasListarComponent]
    });
    fixture = TestBed.createComponent(CarrerasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

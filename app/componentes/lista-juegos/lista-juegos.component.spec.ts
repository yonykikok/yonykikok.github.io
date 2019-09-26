import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJuegosComponent } from './lista-juegos.component';

describe('ListaJuegosComponent', () => {
  let component: ListaJuegosComponent;
  let fixture: ComponentFixture<ListaJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

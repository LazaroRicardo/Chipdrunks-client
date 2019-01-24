import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBarComponent } from './detalle-bar.component';

describe('DetalleBarComponent', () => {
  let component: DetalleBarComponent;
  let fixture: ComponentFixture<DetalleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

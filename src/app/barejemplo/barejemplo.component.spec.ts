import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarejemploComponent } from './barejemplo.component';

describe('BarejemploComponent', () => {
  let component: BarejemploComponent;
  let fixture: ComponentFixture<BarejemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarejemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

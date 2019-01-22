import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barejemplo2Component } from './barejemplo2.component';

describe('Barejemplo2Component', () => {
  let component: Barejemplo2Component;
  let fixture: ComponentFixture<Barejemplo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barejemplo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barejemplo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

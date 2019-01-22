import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barejemplo4Component } from './barejemplo4.component';

describe('Barejemplo4Component', () => {
  let component: Barejemplo4Component;
  let fixture: ComponentFixture<Barejemplo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barejemplo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barejemplo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

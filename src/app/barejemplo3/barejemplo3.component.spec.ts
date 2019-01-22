import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barejemplo3Component } from './barejemplo3.component';

describe('Barejemplo3Component', () => {
  let component: Barejemplo3Component;
  let fixture: ComponentFixture<Barejemplo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barejemplo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barejemplo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

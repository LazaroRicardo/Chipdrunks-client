import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barejemplo1Component } from './barejemplo1.component';

describe('Barejemplo1Component', () => {
  let component: Barejemplo1Component;
  let fixture: ComponentFixture<Barejemplo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barejemplo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barejemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

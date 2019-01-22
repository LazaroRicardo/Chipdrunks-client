import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TusclanesComponent } from './tusclanes.component';

describe('TusclanesComponent', () => {
  let component: TusclanesComponent;
  let fixture: ComponentFixture<TusclanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TusclanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TusclanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankinginicioComponent } from './rankinginicio.component';

describe('RankinginicioComponent', () => {
  let component: RankinginicioComponent;
  let fixture: ComponentFixture<RankinginicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankinginicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankinginicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankinggrupComponent } from './rankinggrup.component';

describe('RankinggrupComponent', () => {
  let component: RankinggrupComponent;
  let fixture: ComponentFixture<RankinggrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankinggrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankinggrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

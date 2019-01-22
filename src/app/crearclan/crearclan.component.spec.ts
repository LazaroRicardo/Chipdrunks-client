import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearclanComponent } from './crearclan.component';

describe('CrearclanComponent', () => {
  let component: CrearclanComponent;
  let fixture: ComponentFixture<CrearclanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearclanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearclanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

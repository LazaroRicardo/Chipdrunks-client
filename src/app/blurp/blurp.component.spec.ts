import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurpComponent } from './blurp.component';

describe('BlurpComponent', () => {
  let component: BlurpComponent;
  let fixture: ComponentFixture<BlurpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

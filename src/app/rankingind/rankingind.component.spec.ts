import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingindComponent } from './rankingind.component';

describe('RankingindComponent', () => {
  let component: RankingindComponent;
  let fixture: ComponentFixture<RankingindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

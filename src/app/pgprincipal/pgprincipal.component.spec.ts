import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgprincipalComponent } from './pgprincipal.component';

describe('PgprincipalComponent', () => {
  let component: PgprincipalComponent;
  let fixture: ComponentFixture<PgprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

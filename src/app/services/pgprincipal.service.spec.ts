import { TestBed } from '@angular/core/testing';

import { PgprincipalService } from './pgprincipal.service';

describe('PgprincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PgprincipalService = TestBed.get(PgprincipalService);
    expect(service).toBeTruthy();
  });
});

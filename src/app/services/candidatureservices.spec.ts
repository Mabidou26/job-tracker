import { TestBed } from '@angular/core/testing';

import { Candidatureservices } from './candidatureservices';

describe('Candidatureservices', () => {
  let service: Candidatureservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Candidatureservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

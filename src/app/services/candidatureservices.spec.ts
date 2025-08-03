import { TestBed } from '@angular/core/testing';
import { CandidatureService } from './../services/candidature.service';

describe('CandidatureService', () => {
  let service: CandidatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatureService], // ici:, Ajout du service
    });
    service = TestBed.inject(CandidatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

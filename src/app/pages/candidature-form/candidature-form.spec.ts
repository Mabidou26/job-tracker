import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureForm } from './candidature-form';

describe('CandidatureForm', () => {
  let component: CandidatureForm;
  let fixture: ComponentFixture<CandidatureForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureFormPage } from './candidature-form';

describe('CandidatureFormComponent', () => {
  let component: CandidatureFormPage;
  let fixture: ComponentFixture<CandidatureFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

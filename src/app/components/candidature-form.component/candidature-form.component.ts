import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
})
export class CandidatureFormComponent {
  candidatureForm;

  constructor(private fb: FormBuilder) {
    this.candidatureForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Availaible: ['', Validators.required]
     
      
    });
  }

  onSubmit() {
    if (this.candidatureForm.valid) {
      console.log(this.candidatureForm.value);
      
    }
  }
}

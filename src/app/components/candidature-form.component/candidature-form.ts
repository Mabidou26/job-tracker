import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-candidature-form',
  standalone: true,
  templateUrl: './candidature-form.html',
  imports: [ReactiveFormsModule]
})
export class CandidatureFormComponent {
  candidatureForm: FormGroup;

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

import { Component } from '@angular/core';
import { CandidatureForm } '; 

@Component({
  selector: 'app-candidature-form',
  imports: [],
  templateUrl: './candidature-form.html',
  styleUrl: './candidature-form.css'
})
export class CandidatureForm {

  onSubmit() {
    if (this.candidatureForm.valid) {
      console.log(this.candidatureForm.value);

      }

}

}


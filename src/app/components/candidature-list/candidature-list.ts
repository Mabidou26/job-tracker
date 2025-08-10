
import { Component } from '@angular/core';

@Component({
  selector: 'app-candidature-list',
  templateUrl: './candidature-list.html'
})

export class CandidatureListComponent {
  candidatures = [
    { name: 'Marie Dupont', poste: 'Développeuse', date: '2025-07-26' },
    { name: 'Jean Martin', poste: 'Designer UX', date: '2025-07-24' },
    { name: 'Charlotte Soum', poste: 'Growth hacker', date: '2025-07-24' }
  ];
  c: any;
}

  
  

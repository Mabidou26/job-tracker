import { Injectable } from '@angular/core';
import { Candidature} from '../models/candidature.model';
import { filter } from 'rxjs';


@Injectable({
  providedIn: 'root'

})

export class Candidatureservices {

  private HOPEJOB_KEYS = 'Candidatures'
  getall (): Candidature [] {
  return JSON.parse(localStorage.getItem(this.HOPEJOB_KEYS) || '[]')
}

 add(candidature: Candidature): void {
    const candidatures = this.getAll();
    candidatures.push(candidature);
    this.saveAll(candidatures);
 
}
  
  

}

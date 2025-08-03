import { Injectable } from '@angular/core';
import { Candidature } from '../models/candidature.model';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  private JOBSTORAGE_KEY = 'candidatures';

  getAll(): Candidature[] {
    return JSON.parse(localStorage.getItem(this.JOBSTORAGE_KEY) || '[]');
  }

  saveAll(candidatures: Candidature[]): void {
    localStorage.setItem(this.JOBSTORAGE_KEY, JSON.stringify(candidatures));
  }

  add(candidature: Candidature): void {
    const candidatures = this.getAll();
    candidatures.push(candidature);
    this.saveAll(candidatures);
  }

  delete(id: string): void {
    const candidatures = this.getAll().filter(c => c.id !== id);
    this.saveAll(candidatures);
  }
}

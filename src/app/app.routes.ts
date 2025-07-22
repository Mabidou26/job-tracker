import { Routes } from '@angular/router';
import { CandidatureForm } from './pages/candidature-form/candidature-form';
import { CandidatureList } from './pages/candidature-list/candidature-list';

export const routes: Routes = [
    { path:'', component: CandidatureForm },
    { path: 'add', component: CandidatureList },
];

import { Routes } from '@angular/router';
import { CandidatureFormPage } from './pages/candidature-form/candidature-form';
import { CandidatureFormComponent } from './components/candidature-form.component/candidature-form';
//import { CandidatureList } from './pages/candidature-list/candidature-list';
//import { CandidatureFormComponent} from './components/candidature-form/candidature-form';

export const routes: Routes = [
    { path: 'candidature', component: CandidatureFormComponent},
    //{ path: 'add', component: CandidatureList },
    //{ path: 'candidature-form', component: CandidatureFormComponent },
    
    
];

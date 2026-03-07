import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Jobs} from './pages/jobs/jobs';
import { DetailJob } from './components/job-detail/job-detail';

export const routes: Routes = [
    {path:"", component : Homepage},
    {path:"jobs", component: Jobs},
    {path:"jobs/:id", component:DetailJob }
];

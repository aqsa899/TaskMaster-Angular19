import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks', component: TasksComponent },
];

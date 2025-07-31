import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
      },
      {
        path: 'tasks',
        component: TasksComponent,
        canActivate: [authGuard]
      },
    { path: '**', redirectTo: 'signup' } // 👈 fallback route
]

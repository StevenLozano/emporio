import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth-guard/auth-guard.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    { 
        path: '', 
        component: DashboardComponent, 
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/dashboard/dashboard.routes').then( m => m.DASHBOARD_ROUTES )
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

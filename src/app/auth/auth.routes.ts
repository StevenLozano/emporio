import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "../features/dashboard/dashboard.component";
import { AuthGuard } from "../core/guards/auth-guard/auth-guard.component";
import { HomeComponent } from "../features/home/home.component";
import { SalesComponent } from "../features/sales/sales.component";

export const AUTH_ROUTES: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'sales',
                component: SalesComponent
            }  
        ]
    },
    { path: '**', redirectTo: 'login' }
];
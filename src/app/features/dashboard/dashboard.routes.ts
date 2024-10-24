import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { SalesComponent } from "../sales/sales.component";
import { ProductsComponent } from "../products/products.component";

export const DASHBOARD_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'sales', component: SalesComponent }
];
import {ModuleWithProviders} from '@angular/core';
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { ItemsComponent } from './my-app-components/items/items.component';
import { SaleComponent } from './my-app-components/sale/sale.component';
const appRoutes: Routes = [
    {path : 'items' , component:ItemsComponent},
    {path : 'sale' , component:SaleComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//export class routing {}
export const routing = RouterModule.forRoot(appRoutes);
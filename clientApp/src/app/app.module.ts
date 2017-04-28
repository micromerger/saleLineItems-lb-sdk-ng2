import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SDKBrowserModule } from './shared/sdk';
import { routing} from './app.routing'
import { AppComponent } from './app.component';
import { ItemsComponent } from './my-app-components/items/items.component';
import { SaleComponent } from './my-app-components/sale/sale.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

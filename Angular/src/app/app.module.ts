import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';

@NgModule({ // this is a decorator
  // these are all the components used in the program
  imports:      [ BrowserModule, AppRoutingModule, CustomersModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ] // bootstrap is the startup component...it's important when there's multiple components
})
export class AppModule { }

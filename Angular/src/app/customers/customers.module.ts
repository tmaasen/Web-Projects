import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  exports: [ CustomersComponent ]
  // bootstrap:    [ CustomersComponent ] don't need this. Only need 1 bootstrap per project
})
export class CustomersModule { }

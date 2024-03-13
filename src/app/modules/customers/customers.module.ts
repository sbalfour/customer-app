import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent, CustomersComponent, CustomersRootComponent } from './components';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersService } from './services';

@NgModule({
  declarations: [
    CustomersRootComponent,
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent, CustomerComponent, CustomersComponent, CustomersRootComponent } from './components';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    CustomersRootComponent,
    CustomersComponent,
    CustomerComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }

// TODO:
// Header / Footer in app component
// Sticky header?
// Customers root styling
// Custom fonts
// Icon fonts
// Customers list
//  - Option to add customer
//  - Option to remote customer (keep at least 10 for now or prevent certain users from deletion)
//  - option to list as rows or cards?
//  - option to edit a customer
//  - option to sort customers
//  - option to expand customer?
//  - option to view customer
//  - pagination or infinate scroll
//  - filter search
//  - timeline dots --0--0--0--
// Customer view
//  - view details
//  - edit details
//  - back to list
//  - remove customer
// Error messages
//  - invalid email
//  - invalid telephone
//  - can not remove customer
//  - customer no longer exists or redirect
// Tests
//  - unit tests
//  - lint
//  - commands for tests
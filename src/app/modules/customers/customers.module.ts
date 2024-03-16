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

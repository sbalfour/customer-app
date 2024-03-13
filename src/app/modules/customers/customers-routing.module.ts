import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent, CustomersComponent, CustomersRootComponent } from "./components";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CustomersRootComponent,
    children: [
      {
        path: '',
        component: CustomersComponent,
        title: 'Customers',
        data: {
        }
      },
      {
        path: 'customer',
        component: CustomerComponent,
        title: 'Customer',
        data: {
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

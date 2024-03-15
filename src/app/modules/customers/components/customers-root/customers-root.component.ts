import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomersService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-root',
  templateUrl: './customers-root.component.html',
  styleUrl: './customers-root.component.scss'
})
export class CustomersRootComponent implements OnInit, OnDestroy {
  private setCustomersSub?: Subscription;

  constructor(
    private customersService: CustomersService
  ) { }

  public ngOnInit(): void {
    this.setCustomersSub = this.customersService.setCustomers().subscribe();
  }

  public ngOnDestroy(): void {
    this.setCustomersSub?.unsubscribe();
  }
}

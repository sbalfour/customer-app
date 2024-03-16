import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, switchMap } from 'rxjs';
import { CustomersService } from '../../services';
import { Customer } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit, OnDestroy {
  private paramsSub?: Subscription;
  private actionSub?: Subscription;
  public customerId: string = this.route.snapshot.params?.['id'];
  public action: string = this.route.snapshot.params?.['action'];
  public customer$: Observable<Customer> = this.customersService.customers.pipe(
    switchMap(customers => customers.filter(customer => customer.id === this.customerId))
  );
  public email = new FormControl('', [Validators.required, Validators.email]);
  public telephone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);
  private storedCustomerDetails?: Customer;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe(params => {
      this.action = params['action'];
      this.customerId = params['id'];
      if (this.action === 'delete') this.deleteCustomer();
      if (this.action === 'edit') this.storedCustomerDetails = {...this.customersService.getCustomerDetails(this.customerId)} as Customer;
    });
    this.customersService.addRandomAction(this.customerId);
  }

  public ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
    this.actionSub?.unsubscribe();
  }

  public getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getTelephoneErrorMessage(): string {
    if (this.telephone.hasError('required')) {
      return 'You must enter a value';
    }
    return this.telephone.hasError('pattern') ? 'Not a valid telephone number' : '';
  }

  private deleteCustomer(): void {
    this.customersService.deleteCustomer(this.customerId);
    this.router.navigate(['/customers']);
  }

  public updateCustomer(customer: Customer): void {
    if (!this.telephone.valid || !this.email.valid) return;
    if (this.email.value) customer.email = this.email.value;
    if (this.telephone.value) customer.telephone = this.telephone.value;
    this.customersService.updateCustomer(this.customerId, customer);
    this.router.navigate(['/customers', 'customer', this.customerId, 'view']);
  }

  public cancelCustomerUpdate(customer: Customer): void {
    customer.email = this.storedCustomerDetails?.email;
    customer.telephone = this.storedCustomerDetails?.telephone;
    this.customersService.updateCustomer(this.customerId, customer);
    this.router.navigate(['/customers', 'customer', this.customerId, 'view']);
  }
}

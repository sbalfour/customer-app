import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Customer } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  public customers: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  private customersApiUrl = 'https://65f1f115034bdbecc76415ad.mockapi.io/api/v1/customers';

  constructor(
    private httpClient: HttpClient
  ) { }

  public setCustomers(): Observable<unknown> {
    return this.httpClient.get<Customer[]>(this.customersApiUrl).pipe(
      map((response) => {
        if (!response) return;
        this.customers.next(response);
      }),
      catchError(errResponse => throwError(
        () => this.throwRequestError(errResponse, `GET ${this.customersApiUrl}`)
      ))
    );
  }

  private throwRequestError(response: any, requestDetails: string): void {
    throw {
      response,
      requestDetails
    };
  }

  public deleteCustomer(id: string): void {
    const customers = this.customers.value.filter(customer => customer.id !== id);
    this.customers.next(customers);
  }

  public updateCustomer(id: string, data: Customer): void {
    let customer = this.customers.value.find(customer => customer.id === id);
    customer = data;
    this.customers.next(this.customers.value);
  }

  public getCustomerDetails(customerId: string): Customer | undefined {
    return this.customers.value.find(customer => customer.id === customerId);
  }

  public addRandomAction(customerId: string): void {
    const actions: string[] = [
      'Opened promotion email',
      'Clicked on see promotion button',
      'Added promotional item to basket'
    ];
    const rndInt = Math.floor(Math.random() * 3);
    const customer = this.customers.value.find(customer => customer.id === customerId);
    if (!customer) return;
    customer.actions.push({
      createdAt: Date.now().toString(),
      action: actions[rndInt]
    });
    customer.actions = [...customer.actions];
  }
}

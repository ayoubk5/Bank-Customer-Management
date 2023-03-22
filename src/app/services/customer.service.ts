import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  searchCustomers(searchQuery: string) : Observable<Customer[]>{
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/customers'; // The URL of the fake API endpoint

  constructor(private http: HttpClient) { }

  // Get all customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  // Get a customer by ID
  getCustomerById(id: string): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
  

  // Create a new customer
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  // Update an existing customer
  updateCustomer(customer: Customer|undefined): Observable<Customer> {
    const url = `${this.apiUrl}/${customer?.id}`;
    return this.http.put<Customer>(url, customer);
  }

  // Delete a customer
  deleteCustomer(id: string|undefined): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}

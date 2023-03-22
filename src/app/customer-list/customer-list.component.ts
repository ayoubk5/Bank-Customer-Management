import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  searchQuery: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
      console.log(customers);
    });
  }

  searchCustomers() {
    this.customerService.searchCustomers(this.searchQuery).subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

  resetSearch() {
    this.searchQuery = '';
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

}

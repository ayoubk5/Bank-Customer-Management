import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
})
export class CustomerCardComponent {
  @Input() customer?: Customer = {
    id: '',
    image: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    gender: '',
    balance: 0,
    accountType: ''
  }; ;
  @Output() edit: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output() delete: EventEmitter<Customer> = new EventEmitter<Customer>();

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }
  updateCustomer() {
    this.customerService.updateCustomer(this?.customer).subscribe(() => {
      this.router.navigate(['updateCustomer']);
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer?.id).subscribe(() => {
      this.router.navigate(['']);
    });
  }   
}


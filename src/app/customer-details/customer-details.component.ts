import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = {
    id: '',
    image: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    gender: '',
    balance: 0,
    accountType: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('id');
    if (customerId) {
      this.customerService.getCustomerById(customerId).subscribe((customer: any) => {
        this.customer = customer;
      });
    }
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/updateCustomer']);
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }

}

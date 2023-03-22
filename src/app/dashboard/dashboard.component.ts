import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  totalCustomers: number = 0;
  totalAmount: number = 0;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers: any[]) => {
      this.totalCustomers = customers.length;
      this.totalAmount = customers.reduce((sum: any, customer: { balance: any; }) => sum + customer.balance, 0);
    });
  }

}

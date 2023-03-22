import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

 
  customer : Customer ={
    id:'',
    image: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    gender: '',
    accountType: '',
    balance:0
 };

  constructor(private _customerService:CustomerService) { }

  ngOnInit(): void {

    };
    // this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   address: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   emailAddress: ['', Validators.required],
    //   gender: ['', Validators.required],
    //   accountType: ['', Validators.required]
    // });

    // if (this.customer) {
    //   this.customerForm.patchValue(this.customer);
    // }
   createGuid()  
    {  
       return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
          var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
          return v.toString(16);  
       });  
    }  
       
  create(){
      this.customer.id=this.createGuid();
      console.log( this.customer.id)
        this._customerService.createCustomer(this.customer).subscribe()
      
  }
}
 



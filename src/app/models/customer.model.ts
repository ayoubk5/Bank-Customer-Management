export interface Customer {
  // addCustomer(customer: Customer): unknown;
  id: string;
  image: string;
  firstName:string,
  lastName:string,
  address: string;
  email: string;
  gender:string;
  accountType: string;
  balance: number;
}

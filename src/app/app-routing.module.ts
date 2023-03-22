import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'customers',component:CustomerListComponent},
  {path:'customers/form',component:CustomerFormComponent},
  {path:'customers/:id',component:CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

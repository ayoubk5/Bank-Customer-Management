import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerFormComponent,
    CustomerFormComponent,
    NavigationComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

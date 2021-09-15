import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';
import { AdminDeleteProductsComponent } from './admin-delete-products/admin-delete-products.component';
import { AdminUpdateProductsComponent } from './admin-update-products/admin-update-products.component';
import { AdminViewRequestsComponent } from './admin-view-requests/admin-view-requests.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminDeleteEmployeeComponent } from './admin-delete-employee/admin-delete-employee.component';
import { AdminGenerateReportsComponent } from './admin-generate-reports/admin-generate-reports.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserRaiseTicketComponent } from './user-raise-ticket/user-raise-ticket.component';
import { UserSelectItemsComponent } from './user-select-items/user-select-items.component';
import { UserDeleteItemsComponent } from './user-delete-items/user-delete-items.component';
import { UserViewItemsComponent } from './user-view-items/user-view-items.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeUpdateOrderStatusComponent } from './employee-update-order-status/employee-update-order-status.component';
import { EmployeeUnlockUsersComponent } from './employee-unlock-users/employee-unlock-users.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    EmployeeComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    EmployeeDashboardComponent,
    AdminAddProductsComponent,
    AdminDeleteProductsComponent,
    AdminUpdateProductsComponent,
    AdminViewRequestsComponent,
    AdminAddEmployeeComponent,
    AdminDeleteEmployeeComponent,
    AdminGenerateReportsComponent,
    UserSignInComponent,
    UserSignUpComponent,
    UserRaiseTicketComponent,
    UserSelectItemsComponent,
    UserDeleteItemsComponent,
    UserViewItemsComponent,
    UserCheckoutComponent,
    UserOrderStatusComponent,
    UserEditProfileComponent,
    UserFundsComponent,
    EmployeeSendRequestComponent,
    EmployeeUpdateOrderStatusComponent,
    EmployeeUnlockUsersComponent,
    EmployeeEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

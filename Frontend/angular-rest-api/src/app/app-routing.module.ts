import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDeleteEmployeeComponent } from './admin-delete-employee/admin-delete-employee.component';
import { AdminDeleteProductsComponent } from './admin-delete-products/admin-delete-products.component';
import { AdminGenerateReportsComponent } from './admin-generate-reports/admin-generate-reports.component';
import { AdminUpdateProductsComponent } from './admin-update-products/admin-update-products.component';
import { AdminViewRequestsComponent } from './admin-view-requests/admin-view-requests.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeUnlockUsersComponent } from './employee-unlock-users/employee-unlock-users.component';
import { EmployeeUpdateOrderStatusComponent } from './employee-update-order-status/employee-update-order-status.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDeleteItemsComponent } from './user-delete-items/user-delete-items.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserRaiseTicketComponent } from './user-raise-ticket/user-raise-ticket.component';
import { UserSelectItemsComponent } from './user-select-items/user-select-items.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserViewItemsComponent } from './user-view-items/user-view-items.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:"user", component:UserComponent},
  {path:"user-sign-up", component:UserSignUpComponent},
  {path:"user-sign-in", component:UserSignInComponent},
  {path:"user-raise-ticket", component:UserRaiseTicketComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"admin-dashboard/:user", component:AdminDashboardComponent,
  children: [
    {path: "add-products", component:AdminAddProductsComponent},
    {path: "delete-products", component:AdminDeleteProductsComponent},
    {path: "update-products", component:AdminUpdateProductsComponent},
    {path: "view-requests", component:AdminViewRequestsComponent},
    {path: "add-employee", component:AdminAddEmployeeComponent},
    {path: "delete-employee", component:AdminDeleteEmployeeComponent},
    {path: "generate-reports", component:AdminGenerateReportsComponent},
    
  ]
},
  {path:"user-dashboard/:user", component:UserDashboardComponent,
  children: [
    {path: "select-items", component:UserSelectItemsComponent},
    {path: "delete-items", component:UserDeleteItemsComponent},
    {path: "view-items", component:UserViewItemsComponent},
    {path: "checkout", component:UserCheckoutComponent},
    {path: "order-status", component:UserOrderStatusComponent},
    {path: "edit-profile", component:UserEditProfileComponent},
    {path: "funds", component:UserFundsComponent}
  ]

},
  {path:"employee-dashboard/:user", component:EmployeeDashboardComponent,
  children: [
    {path: "send-request", component:EmployeeSendRequestComponent},
    {path: "update-order-status", component:EmployeeUpdateOrderStatusComponent},
    {path: "unlock-users", component:EmployeeUnlockUsersComponent},
    {path: "edit-profile", component:EmployeeEditProfileComponent},
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

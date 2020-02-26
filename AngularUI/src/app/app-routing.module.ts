import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortComponent } from './sort/sort.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  }, {
    path : 'register',
    component : RegisterComponent
  },
{
  path : 'dashboard',
  component : DashboardComponent

},
{
  path : 'sort',
  component : SortComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

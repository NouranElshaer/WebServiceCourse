import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { NewuserComponent } from './Components/newuser/newuser.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  // {path,'',component:}
  // {path:'',component:UsersComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

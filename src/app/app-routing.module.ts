import { NgModule, Component } from '@angular/core';
//import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent, canActivate:[GuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}

];

/*
[
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent}
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

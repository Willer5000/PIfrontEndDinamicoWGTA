import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditExperienciaComponent } from './component/portfolio/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/portfolio/experiencia/new-experiencia.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//OPCION B
/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditExperienciaComponent } from './component/portfolio/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/portfolio/experiencia/new-experiencia.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[GuardGuard]},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
//OPCION C
/*import { NgModule, Component } from '@angular/core';
//import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditExperienciaComponent } from './component/portfolio/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/portfolio/experiencia/new-experiencia.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent, canActivate:[GuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent}

];
/*
[
 ////// {path:'', component: HomeComponent},
  /////////{path:'login', component: LoginComponent}
];*/

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
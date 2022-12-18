import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { OtrosComponent } from './component/otros/otros.component';

const routes: Routes = [
  {path:'otros',component:OtrosComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

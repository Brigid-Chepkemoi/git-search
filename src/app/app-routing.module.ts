import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {NavComponent} from "./nav/nav.component"





const routes: Routes = [ 
  // {path:"",component: NavComponent},
  // // {path:"", component: GitsearchFormComponent},
  // // {path:'', component:ErrorComponent },
  // { path: '', redirectTo:"", pathMatch:"full"},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
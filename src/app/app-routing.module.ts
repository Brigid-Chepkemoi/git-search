import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SearchGitComponent } from './search-git/search-git.component';
import { RepoComponent } from './repo/repo.component';
import { ErrorComponent } from './error/error.component';
import {NavComponent} from "./nav/nav.component"



const routes: Routes = [ 
  {path:"Home", component: NavComponent},
  {path:"repo", component: RepoComponent},
  {path:'**', component:ErrorComponent },
  { path: '', redirectTo:"/Home", pathMatch:"full"},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { RepoComponent } from './repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GitsearchFormComponent,
    RepoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

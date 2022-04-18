import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GitSearchFormComponent,
    GitsearchFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

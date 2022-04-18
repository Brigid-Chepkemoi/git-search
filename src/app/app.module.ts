import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { RepoComponent } from './repo/repo.component';
import { SearchGitComponent } from './search-git/search-git.component';
import { TimePipe } from './time.pipe';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GitsearchFormComponent,
    RepoComponent,
    SearchGitComponent,
    TimePipe,
    ErrorComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

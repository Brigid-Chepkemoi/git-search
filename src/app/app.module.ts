import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { HighlightDirective } from './highlight.directive';
import { GitSearchService } from './git-search.service';
import { DatePipePipe } from './date-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    HighlightDirective,
    DatePipePipe,
 
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

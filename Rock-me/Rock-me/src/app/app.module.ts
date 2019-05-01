import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Criterion1Component } from './criterion1/criterion1.component';
import { Criterion2Component } from './criterion2/criterion2.component';
import { ProfileComponent } from './profile/profile.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { SelectService } from './select.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Criterion1Component,
    Criterion2Component,
    ProfileComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

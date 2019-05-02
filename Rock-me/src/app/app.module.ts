import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Criterion1Component } from './criterion1/criterion1.component';
import { Criterion2Component } from './criterion2/criterion2.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectService } from './select.service';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { ConditionsComponent } from './conditions/conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Criterion1Component,
    Criterion2Component,
    ProfileComponent,
    ContactComponent,
    ConditionsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "homepage",
          component: HomeComponent,
          pathMatch: "full",
        },
        {
          path: "criterion1",
          component: Criterion1Component,
          pathMatch: "full",
        },
        {
          path: "criterion2",
          component: Criterion2Component,
          pathMatch: "full",
        },
        {
          path: "profile",
          component: ProfileComponent,
          pathMatch: "full",
        },
        {
          path: "chat",
          component: ChatComponent,
          pathMatch: "full",
        },
        {
          path: "conditions",
          component: ConditionsComponent,
          pathMatch: "full",
        },
        {
          path: "contact",
          component: ContactComponent,
          pathMatch: "full",
        }

      ]
    )
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

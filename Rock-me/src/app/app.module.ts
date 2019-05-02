import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Criterion1Component } from './criterion1/criterion1.component';
import { Criterion2Component } from './criterion2/criterion2.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { DiscussionComponent } from './discussion/discussion.component';
import { SelectService } from './select.service';
=======
import { SelectService } from './select.service';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { ConditionsComponent } from './conditions/conditions.component';

>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Criterion1Component,
    Criterion2Component,
    ProfileComponent,
<<<<<<< HEAD
    DiscussionComponent
=======
    ContactComponent,
    ConditionsComponent,
    ChatComponent,
>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    AppRoutingModule
  ],
  providers: [SelectService],
=======
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

>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
  bootstrap: [AppComponent]
})
export class AppModule { }

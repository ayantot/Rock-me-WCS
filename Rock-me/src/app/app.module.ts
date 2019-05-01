import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectService } from './select.service';



@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    ContactComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'App', component: AppComponent},

      {path:'', component: HomeComponent},
      {path:'Conditions', component: ConditionsComponent },
      {path:'Contact', component: ContactComponent },

    ]
    )
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

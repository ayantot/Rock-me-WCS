import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { PresentationComponent } from './presentation/presentation.component';
import { Criteres1Component } from './criteres1/criteres1.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Criterion2Component } from './criterion2/criterion2.component';
import { SelectService } from './select.service';



@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    PresentationComponent,
    Criteres1Component,
    Criterion2Component,
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
      {path:'Chat', component: DialogueComponent},

      {path:'Criteres1', component: Criteres1Component},
      {path:'Criteres2', component: Criterion2Component},
      {path:'', component: HomeComponent},
      {path:'Conditions', component: ConditionsComponent },
      {path:'Contact', component: ContactComponent },
      {path:'Présentation', component: PresentationComponent}

    ]
    )
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyConsulLibComponent } from './components/my-consul-lib/my-consul-lib.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SectionFirstHomeComponent } from './components/section-first-home/section-first-home.component';
import { HomeComponent } from './views/home/home.component';
import { ContainerProfitsComponent } from './components/container-profits/container-profits.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { AboutsMeComponent } from './components/abouts-me/abouts-me.component';
import { ServicesConsulteccniaComponent } from './components/services-consulteccnia/services-consulteccnia.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import {HttpClientModule} from "@angular/common/http";
import { DigitalizarComponent } from './components/digitalizar/digitalizar/digitalizar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyConsulLibComponent,
    HeaderComponent,
    CoursesComponent,
    SectionFirstHomeComponent,
    HomeComponent,
    ContainerProfitsComponent,
    AboutMeComponent,
    AboutsMeComponent,
    ServicesConsulteccniaComponent,
    FormContactComponent,
    DigitalizarComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, RouterModule.forRoot([]), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

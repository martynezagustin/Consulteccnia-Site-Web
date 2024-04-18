import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyConsulLibComponent } from './components/my-consul-lib/my-consul-lib.component';
import { PublicRoutingModule } from './public-routing.routing';
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
import { HttpClientModule } from "@angular/common/http";
import { DigitalizarComponent } from './components/digitalizar/digitalizar/digitalizar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlansComponent } from './components/plans/plans.component';
import { BusinessTrustComponent } from './components/business-trust/business-trust.component';
import { UserFormSingUpComponent } from './components/userFormSingUp/user-form-sing-up/user-form-sing-up.component';
import { ConsulPlusComponent } from './views/consulPlus/consul-plus/consul-plus.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginPageComponent } from './views/loginPage/login-page/login-page.component';
import { DashboardComponent } from './components/private/dashboard/dashboard/dashboard.component';
import { FinanceComponent } from './components/private/dashboard/finance/finance/finance.component';
import { NavbarComponent } from './components/private/dashboard/navbar/navbar/navbar.component';
import { AdministrativeComponent } from './components/private/dashboard/administrative/administrative/administrative.component';
import { InstitutionalComponent } from './components/private/dashboard/institutional/institutional/institutional.component';
import { TechnologyComponent } from './components/private/dashboard/technology/technology/technology.component';
import { CarbonFootprintComponent } from './components/private/dashboard/carbon-footprint/carbon-footprint/carbon-footprint.component';
import { GuidesComponentsComponent } from './components/guides-components/guides-components.component';
import { GuidesViewComponent } from './views/guides-view/guides-view.component';
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
    FooterComponent,
    PlansComponent,
    BusinessTrustComponent,
    UserFormSingUpComponent,
    ConsulPlusComponent,
    LoginComponent,
    LoginPageComponent,
    DashboardComponent,
    FinanceComponent,
    NavbarComponent,
    AdministrativeComponent,
    InstitutionalComponent,
    TechnologyComponent,
    CarbonFootprintComponent,
    GuidesComponentsComponent,
    GuidesViewComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, PublicRoutingModule, RouterModule.forRoot([]), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

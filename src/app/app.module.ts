import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { ContactComponent } from './components/contact/contact.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AcceuilComponent,
    IntroductionComponent,
    ProduitsComponent,
    ContactComponent,
    TemoignageComponent,
    FaqComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

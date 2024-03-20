import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ButtonSelectFileComponent } from './button-select-file/button-select-file.component';
import { HttpClientModule } from '@angular/common/http';
import { MainListComponent } from './main-list/main-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { VorlagenComponent } from './vorlagen/vorlagen.component';
import { EmailadressenComponent } from './emailadressen/emailadressen.component';
import { EmailsendenComponent } from './emailsenden/emailsenden.component';
import { Vorlage1Component } from './vorlage1/vorlage1.component';
import { Vorlage2Component } from './vorlage2/vorlage2.component';
import { Vorlage3Component } from './vorlage3/vorlage3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ButtonSelectFileComponent,
    MainListComponent,
    NavbarComponent,
    HomeComponent,
    VorlagenComponent,
    EmailadressenComponent,
    EmailsendenComponent,
    Vorlage1Component,
    Vorlage2Component,
    Vorlage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

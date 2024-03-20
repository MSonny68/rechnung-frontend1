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

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ButtonSelectFileComponent,
    MainListComponent,
    NavbarComponent,
    HomeComponent,
    VorlagenComponent,
    EmailadressenComponent
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

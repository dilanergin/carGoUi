import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import {MainPageComponent} from "./main-page/main-page.component";
import {provideToastr, ToastrModule} from "ngx-toastr";
import {provideAnimations} from "@angular/platform-browser/animations";
import { GarageComponent } from './garage/garage.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import {TokenInterceptor} from "./api-interceptor.service";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainPageComponent,
    ProfileComponent,
    GarageComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],

  providers: [  provideAnimations(), // required animations providers
    provideToastr(), ],
  bootstrap: [AppComponent]
})
export class AppModule { }

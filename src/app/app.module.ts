import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutngModule } from './app-routing.module';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { bootstrapApplication } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutngModule,
  ],  
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

// Bootstrap the application using the standalone component
bootstrapApplication(AppComponent).catch(err => console.error(err));

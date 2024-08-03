import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[NavBarComponent,RouterOutlet,FooterComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FreshCart';
}

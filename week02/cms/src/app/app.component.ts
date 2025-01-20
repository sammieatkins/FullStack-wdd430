import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component'
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@Component({
  selector: 'cms-root',
  imports: [RouterOutlet, HeaderComponent, ContactListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';
}

import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';
import { Component } from '@angular/core';

@Component({
  selector: 'cms-contact-detail',
  // ?? i needed to import the CommonModule in order to use ngFor and whatnot. wasn't in the instructions, though. was that correct?
  imports: [CommonModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  // ?? do i just copy this again or should i import it somehow? will it be dynamic eventually? doesn't seem to be stored in a common location at the moment.
  contacts: Contact[] = [
    new Contact(
      "1",
      "R. Kent Jackson",
      "jacksonk@byui.edu",
      "208-496-3771",
      "images/jacksonk.jpg",
      []),
    new Contact(
      "2",
      "Rex Barzee",
      "barzeer@byui.edu",
      "208-496-3768",
      "images/barzeer.jpg",
      []),
  ];
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent {
  @Input() contact!: Contact;
  @Output() contactSelected = new EventEmitter<void>();

  // If you want to prevent the default behavior of the anchor tag
  onSelected() {
    this.contactSelected.emit(); // Emit the contactSelected event
  }
}

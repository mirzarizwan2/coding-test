import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { contacts } from 'src/app/fakedb/db';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  data: any
  contactslisting: any = contacts
  contact: any = contacts
  display: boolean = false
  p: any = 1;
  count: any = 5;
  constructor() { }

  ngOnInit(): void {
    this.getContacts()


  }
  getContacts() {

    console.log(this.contact);

  }
  details(contact: any) {

    this.data = contact
    console.log(contact);
    this.display = true

  }
  search(search: any) {
    console.log(search.target.value);
    if (search.target.value !== '') {
      this.contactslisting = this.contactslisting.filter((val: any) =>
        val.username.toLowerCase() === search.target.value.toLowerCase())
      console.log(this.contactslisting);
    } else {
      this.contactslisting = this.contact
      console.log("hello", this.contactslisting);

    }

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    NgxPaginationModule
  ]
})
export class ContactsModule { }

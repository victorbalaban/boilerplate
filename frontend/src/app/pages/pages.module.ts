import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NoteComponent } from './note/note.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  declarations: [HomeComponent, NavbarComponent,NoteComponent]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NoteComponent } from './note/note.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  declarations: [HomeComponent, NavbarComponent,NoteComponent, CatalogComponent]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: 'pages', component: NavbarComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'note', component: NoteComponent },
      { path: 'catalog', component: CatalogComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {
    path: 'pages', component: NavbarComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'note', component: NoteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

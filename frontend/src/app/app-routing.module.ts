import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './pages/note/note.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: 'pages/note', component: NoteComponent, pathMatch: 'full' },
  { path: 'pages/catalog', component: CatalogComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

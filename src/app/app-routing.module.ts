import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { MusicCardComponent } from './components/music-card/music-card.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'prueba-estatica', component: MusicCardComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

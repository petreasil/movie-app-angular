import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieshomeComponent } from './components/movieshome/movieshome.component';
import { Page404Component } from './components/page404/page404.component';
import { MoviesResolver } from './resolvers/movies.resolvers';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'movies',
    component: MovieshomeComponent,
    resolve: { movies: MoviesResolver },
    children: [
      { path: '', pathMatch: 'full', component: MoviesComponent },
      { path: 'watchlist', component: HomeComponent },
      { path: ':id', component: MoviedetailsComponent },
    ],
  },

  { path: '**', component: Page404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

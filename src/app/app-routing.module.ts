import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesResolver } from './resolvers/movies.resolvers';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: { movies: MoviesResolver },
  },
  { path: 'movies/:id', component: MoviedetailsComponent },
  {path:'watchlist', component: HomeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesResolver } from './resolvers/movies.resolvers';
import { MoviesServicesService } from './services/movies-services.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WatchListService } from './services/watch-list.service';
import {AngularFirestoreModule} from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviedetailsComponent,
    HomeComponent,
    MovieComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [MoviesResolver, MoviesServicesService, WatchListService],
  bootstrap: [AppComponent],
})
export class AppModule {}

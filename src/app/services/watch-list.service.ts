import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { classToPlain } from 'class-transformer';
import { MovieModel } from '../models/movie.model';

@Injectable()
export class WatchListService {
  toWatch: MovieModel[] = [];
  constructor(
    private fireStore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {}

  addMovie(movie: MovieModel): void {
    if (this.isSaved(movie)) {
      this.removeMovie(movie);
      return;
    }
    this.toWatch.push(movie);
    console.log(this.toWatch);
  }
  removeMovie(movie: MovieModel): void {
    const index = this.toWatch.findIndex(
      (item: MovieModel) => item.id === movie.id
    );
    this.toWatch.splice(index, 1);
    console.log(this.toWatch);
  }

  isSaved(movie: MovieModel): boolean {
    const index = this.toWatch.findIndex(
      (item: MovieModel) => item.id === movie.id
    );
    return index !== -1;
  }

  updateMovies() {
    const payload = classToPlain(this.toWatch);

    this.fireStore
      .collection('users')
      .doc(this.fireAuth.currentUser)
      .set({ movies: payload }, { merge: true });
  }

  getMovies() {}
}

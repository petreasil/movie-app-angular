import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { classToPlain, plainToClass } from 'class-transformer';
import { MovieModel } from '../models/movie.model';

@Injectable()
export class WatchListService {
  toWatch: MovieModel[] = [];
  constructor(
    private fireStore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {}

  async addMovie(movie: MovieModel): Promise<void> {
    if (this.isSaved(movie)) {
      this.removeMovie(movie);
      await this.updateMovies();
      return;
    }
    this.toWatch.push(movie);
    this.updateMovies();
    //console.log(this.toWatch);
  }
  removeMovie(movie: MovieModel): void {
    const index = this.toWatch.findIndex(
      (item: MovieModel) => item.id === movie.id
    );
    this.toWatch.splice(index, 1);
    //console.log(this.toWatch);
  }

  isSaved(movie: MovieModel): boolean {
    const index = this.toWatch.findIndex(
      (item: MovieModel) => item.id === movie.id
    );
    return index !== -1;
  }

  async updateMovies() {
    const payload = classToPlain(this.toWatch);
    const user = await this.fireAuth.currentUser;
    //console.log(user?.uid);
    this.fireStore
      .collection('users')
      .doc(user?.uid)
      .set({ movies: payload }, { merge: true });
  }

  async getMovies(): Promise<MovieModel> {
    const user = await this.fireAuth.currentUser;
    const result = await this.fireStore
      .collection('users')
      .doc(user?.uid)
      .ref.get();
    const movies = result.data();

    return plainToClass(MovieModel, movies);
  }

  async initMovies(): Promise<void> {
    //this.toWatch = await this.getMovies();
  }
}

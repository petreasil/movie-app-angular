import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesServicesService } from 'src/app/services/movies-services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: MovieModel[] = [];

  constructor(private movieService: MoviesServicesService) {}

  async ngOnInit(): Promise<void> {
    const result = await this.movieService.getAll();
    this.movies = result.results;
  }
}

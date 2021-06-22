import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesServicesService } from 'src/app/services/movies-services.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  movieId: number;
  movie: MovieModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesServicesService
  ) {
    const snapshot = activatedRoute.snapshot;
    const { id } = snapshot.params;
    this.movieId = +id;

    console.log(activatedRoute.snapshot, id);
  }

  async ngOnInit(): Promise<void> {
    const result = await this.movieService.getOne(this.movieId);
    this.movie = result;
    console.log(result);
  }
}

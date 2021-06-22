import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;

  constructor(
    private router: Router,
    public watchListService: WatchListService
  ) {}

  ngOnInit(): void {}

  async showDetails(): Promise<void> {
    await this.router.navigate(['/movies', this.movie.id]);
  }

  addToList() {
    this.watchListService.addMovie(this.movie);
  }
}

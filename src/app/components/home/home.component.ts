import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public watchlistService: WatchListService) {}

  async ngOnInit(): Promise<void> {
    //await this.watchlistService.initMovies();
    const { movies }: any = await this.watchlistService.getMovies();
    console.log(movies);
    this.watchlistService.toWatch = movies;
  }
}

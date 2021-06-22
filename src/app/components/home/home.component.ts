import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public watchlistService: WatchListService) {}

  ngOnInit(): void {
    this.watchlistService.updateMovies();
  }
}

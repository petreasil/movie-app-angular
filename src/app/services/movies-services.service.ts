import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment.prod';
import { MovieModel } from '../models/movie.model';
import { MoviesInfoModel } from '../models/movies-info.model';

@Injectable()
export class MoviesServicesService {
  constructor(private http: HttpClient) {}

  async getAll(): Promise<MoviesInfoModel> {
    const result = await this.http
      .get(environment.baseUrl + environment.apiKey)
      .toPromise();
    const moviesinfo = plainToClass(MoviesInfoModel, result);
    return moviesinfo;
  }

  async getOne(id: number): Promise<MovieModel> {
    const url = `${environment.baseUrl2}${id}?api_key=${environment.apiKey}`;
    const result2 = await this.http.get(url).toPromise();
    const moviesinfo = plainToClass(MovieModel, result2);
    return moviesinfo;
  }
}

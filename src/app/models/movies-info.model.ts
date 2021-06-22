import { Type } from 'class-transformer';
import { MovieModel } from './movie.model';

export class MoviesInfoModel {
  page: number;

  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

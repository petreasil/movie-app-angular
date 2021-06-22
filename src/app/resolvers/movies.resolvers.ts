import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class MoviesResolver implements Resolve<string[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string[] {
    return ['movie A', 'movie B'];
  }
}

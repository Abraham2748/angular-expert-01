import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? preload() : of(null);
  }
}

import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { MyPreloadingStrategy } from './preloading';

export const appConfig: ApplicationConfig = {
  providers: [
    MyPreloadingStrategy,
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withPreloading(MyPreloadingStrategy)),
  ],
};

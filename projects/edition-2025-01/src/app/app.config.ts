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
import { MyCustomPreloading } from './custom-preloading';

export const appConfig: ApplicationConfig = {
  providers: [
    MyCustomPreloading,
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withPreloading(MyCustomPreloading)),
  ],
};

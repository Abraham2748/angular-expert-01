import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { CustomPreloading } from './custom-preloading';

export const appConfig: ApplicationConfig = {
  providers: [
    CustomPreloading,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(CustomPreloading)),
  ],
};

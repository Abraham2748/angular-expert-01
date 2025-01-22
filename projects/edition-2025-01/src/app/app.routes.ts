import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    data: {
      preload: true,
    },
  },
  {
    path: 'latam',
    loadComponent: () =>
      import('./latam/latam.component').then((c) => c.LatamComponent),
  },
  {
    path: 'europa',
    loadComponent: () =>
      import('./europa/europa.component').then((c) => c.EuropaComponent),
  },
  {
    path: 'asia',
    loadComponent: () =>
      import('./asia/asia.component').then((c) => c.AsiaComponent),
    data: {
      preload: true,
    },
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-a',
    loadComponent: () =>
      import('./page-a/page-a.component').then((m) => m.PageAComponent),
    data: {
      preload: true,
    },
  },
  {
    path: 'page-b',
    loadComponent: () =>
      import('./page-b/page-b.component').then((m) => m.PageBComponent),
    data: { preload: true },
  },
  {
    path: 'page-c',
    loadComponent: () =>
      import('./page-c/page-c.component').then((m) => m.PageCComponent),
    data: { preload: false },
  },
];

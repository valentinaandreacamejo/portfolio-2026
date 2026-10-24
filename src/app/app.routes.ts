import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/portfolio-page').then((m) => m.PortfolioPage),
  },
  { path: '**', redirectTo: '' },
];

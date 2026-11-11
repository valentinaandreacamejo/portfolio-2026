import { Routes } from '@angular/router';

const SITE_TITLE = 'Valentina Andrea Camejo — Front-end Developer & UX Engineer';

export const routes: Routes = [
  {
    path: '',
    title: SITE_TITLE,
    loadComponent: () => import('./features/portfolio/portfolio-page').then((m) => m.PortfolioPage),
  },
  {
    path: 'off-duty',
    title: `Off-Duty / Dual Soul Lab — ${SITE_TITLE}`,
    loadComponent: () => import('./features/off-duty/off-duty-page').then((m) => m.OffDutyPage),
  },
  { path: '**', redirectTo: '' },
];

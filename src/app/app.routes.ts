import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/components/layout/routes').then(m => m.routes)
  }
];

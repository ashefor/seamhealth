import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'complaints',
        loadComponent: () => import('@pages/complaints/complaints.component').then(m=> m.ComplaintsComponent),
        data: {
          heading: 'Complaints',
          parent: 'Feedback'
        }
      },
      {
        path: '',
        redirectTo: 'complaints',
        pathMatch: 'full'
      }
    ]
  }
]

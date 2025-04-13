import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SinglePageComponent } from './components/pages/single-page/single-page.component';

export const routes: Routes = [
  { path: '', component: SinglePageComponent },
  // { path: 'departments', component: DepartmentListComponent },
  // { path: 'employees', component: EmployeeListComponent },
  // {
  //   path: 'departments/:id',
  //   component: DepartmentDetailComponent,
  //   children: [
  //     { path: 'overview', component: DepartmentOverviewComponent },
  //     { path: 'contact', component: DepartmentContactComponent },
  //   ],
  // },
  // // ** route at the bottom always
  { path: '**', component: PageNotFoundComponent },
];

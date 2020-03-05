import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/route1', pathMatch: 'full' },
  { path: 'route1', component: Route1Component },
  { path: 'route1/:id', component: DepartmentDetailComponent },
  { path: 'route2', component: Route2Component },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Route1Component, Route2Component, PageNotFoundComponent, DepartmentDetailComponent];

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CarComponent} from './car/car.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: CarDetailComponent},
    {path: 'cars', component: CarComponent},
    {path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

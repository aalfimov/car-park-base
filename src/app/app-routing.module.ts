import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CarComponent} from './car/car.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import {HomeComponent} from './home/home.component';

/*    {path: '', redirectTo: '/home', component: HomeComponent, pathMatch: 'full'},*/
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
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

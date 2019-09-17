import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {CarSearchComponent} from './car-search/car-search.component';

import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import {HomeComponent} from './home/home.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        CarComponent,
        CarDetailComponent,
        MessagesComponent,
        DashboardComponent,
        CarSearchComponent,
        PageNotFoundComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

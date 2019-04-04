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

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
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
        PageNotFoundComponentComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

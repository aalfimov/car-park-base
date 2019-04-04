import {Component} from '@angular/core';
import {CarService} from './car.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Fleet Manager';
    constructor(private carService: CarService) {
    }
    callCarsOnTheRoute() {
        this.carService.parameterDashboard = true;
    }

    callCarsOnGarage() {
        this.carService.parameterDashboard = false;
    }
}

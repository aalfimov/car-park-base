import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    cars: Car[] = [];
    constructor(private carService: CarService) {
    }
    ngOnInit() {
        this.getCars();
    }

    getCars(): void {
        this.carService.getCars().subscribe(cars => this.cars = cars);
    }

    findingCar() {
        return this.cars.filter((car) => car.route === this.carService.parameterDashboard);
    }
}

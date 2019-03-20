import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
    selector: 'app-garage',
    templateUrl: './garage.component.html',
    styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
    cars: Car[] = [];

    constructor(private carService: CarService) {
    }

    ngOnInit() {
        this.getCars();
    }

    getCars(): void {
        this.carService.getCars()
            .subscribe(cars => this.cars = cars);
    }

    getItems() {
        return this.cars.filter((car) => car.route === false);
    }
}

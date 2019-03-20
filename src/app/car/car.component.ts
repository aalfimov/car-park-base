import {Component, OnInit} from '@angular/core';

import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
    selector: 'app-cars',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
    cars: Car[];

    constructor(private carService: CarService) {
    }

    ngOnInit() {
        this.getcars();
    }

    getcars(): void {
        this.carService.getCars()
            .subscribe(cars => this.cars = cars);
    }

    add(mark: string): void {
        mark = mark.trim();
        if (!mark) {
            return;
        }
        this.carService.addCar({mark} as Car)
            .subscribe(car => {
                this.cars.push(car);
            });
    }

    delete(car: Car): void {
        this.cars = this.cars.filter(h => h !== car);
        this.carService.deleteCar(car).subscribe();
    }

}

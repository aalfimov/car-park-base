import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Car} from './car';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cars = [
            {id: 11, mark: 'BMW', state: 0.99, age: new Date(1961, 3, 12), route: true},
            {id: 12, mark: 'Jaguar', state: 0.80, age: new Date(2015, 1, 19), route: false},
            {id: 13, mark: 'Mazda', state: 0.74, age: new Date(2010, 9, 7), route: true},
            {id: 14, mark: 'Mercedes', state: 0.20, age: new Date(2003, 10, 11), route: true},
            {id: 15, mark: 'Nissan', state: 1.00, age: new Date(2005, 4, 26), route: true},
            {id: 16, mark: 'Opel', state: 0.68, age: new Date(2018, 11, 20), route: false},
            {id: 17, mark: 'Peugeot', state: 0.79, age: new Date(1992, 8, 13), route: true},
            {id: 18, mark: 'Jeep', state: 0.91, age: new Date(1995, 7, 30), route: true},
            {id: 19, mark: 'Acura', state: 0.85, age: new Date(1986, 9, 29), route: false},
            {id: 20, mark: 'Audi', state: 0.33, age: new Date(1970, 12, 15), route: true}
        ];
        return {cars};
    }


    genId(cars: Car[]): number {
        return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
    }
}

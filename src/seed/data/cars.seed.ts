import {Car} from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED : Car[] = [
    {
        id: uuid(),
        model:"Civic",
        brand:"Honda"
    },
    {
        id: uuid(),
        model:"Cherokee",
        brand:"Jeep"
    },
    {
        id: uuid(),
        model:"k3",
        brand:"Kia"
    }
]
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
   
    private cars = [
        {
            id:1,
            brand:"Toyota",
            model:"1"
        },
        {
            id:2,
            brand:"Corolla",
            model:"2"
        },
        {
            id:3,
            brand:"kia",
            model:"K3"
        }
    ];

    findAll(){
       return this.cars;
    }

    findOneById(id){
       return this.cars.filter( car => car.id == id );
    }
}

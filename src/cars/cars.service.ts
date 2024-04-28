import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
   
    private cars : Car[] = [
        {
            id:uuid(),
            brand:"Toyota",
            model:"1"
        },
        {
            id:uuid(),
            brand:"Corolla",
            model:"2"
        },
        {
            id:uuid(),
            brand:"kia",
            model:"K3"
        }
    ];

    findAll(){
       return this.cars;
    }

    findOneById(id: string){

       const car = this.cars.find( car => car.id == id );

       if(!car) throw new NotFoundException(`car with${id} not found`);

       return car;
    }

    createCar(createCarDto: CreateCarDto){

        this.cars.push(createCarDto)

        return createCarDto;
    }

    update(id: string, updateCarDto: UpdateCarDto){
        
        let carDB = this.findOneById(id)

        if( updateCarDto && updateCarDto.id != id  )
        throw new BadRequestException('Car Id is not valid inside body')

           this.cars = this.cars.map( car  =>{
                if(car.id == id) {
                    carDB = { ...carDB, ...updateCarDto, id }
                    return carDB;
                }

                return car
           });
           return carDB;
    }

    delete (id: string){
        const car =this.findOneById(id);
        this.cars.filter( car => car.id == id );
    }
}
